"use server";

import { LoginSchema } from "@/schemas";
import { LoginFormValues, LoginResponse } from "@/types";

export const login = async (
  values: LoginFormValues
): Promise<LoginResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!", success: null };
  }
  return { error: null, success: "Successful login" };
};
