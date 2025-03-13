"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { LoginFormValues, AuthResponse } from "@/types";
import { AuthError } from "next-auth";

export const login = async (values: LoginFormValues): Promise<AuthResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!", success: null };
  }
  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!", success: null };
        default:
          return { error: "An error occurred!", success: null };
      }
    }
    throw error;
  }
  return { error: "null", success: null };
};
