"use server";

import { RegisterSchema } from "@/schemas";
import { RegisterFormValues, AuthResponse } from "@/types";

export const signup = async (
  values: RegisterFormValues
): Promise<AuthResponse> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!", success: null };
  }
  return { error: null, success: "Registered!" };
};
