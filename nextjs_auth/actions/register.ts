"use server";

import { RegisterSchema } from "@/schemas";
import { RegisterFormValues, RegisterResponse } from "@/types";

export const signup = async (
  values: RegisterFormValues
): Promise<RegisterResponse> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!", success: null };
  }
  return { error: null, success: "Registered!" };
};
