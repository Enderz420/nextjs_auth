"use server";

import { RegisterSchema } from "@/schemas";
import { RegisterFormValues, AuthResponse } from "@/types";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const signup = async (
  values: RegisterFormValues
): Promise<AuthResponse> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!", success: null };
  }

  const { name, email, password }: RegisterFormValues = validatedFields.data;

  const hashedPassword: string = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use!", success: null };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  console.log("User created!");
  return { error: null, success: "User created!" };
};
