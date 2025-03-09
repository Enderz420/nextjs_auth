"use server";

import { LoginSchema } from "@/schemas";
import { LoginFormValues, AuthResponse } from "@/types";

export const login = async (values: LoginFormValues): Promise<AuthResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!", success: null };
  }
  return { error: null, success: "Successful login" };
};
