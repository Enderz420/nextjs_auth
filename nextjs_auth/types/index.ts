import { LoginSchema, RegisterSchema } from "@/schemas";
import { z } from "zod";

export type LoginFormValues = z.infer<typeof LoginSchema>;

export interface LoginResponse {
  error: string | null;
  success: string | null;
}
export type RegisterFormValues = z.infer<typeof RegisterSchema>;

export interface RegisterResponse {
  error: string | null;
  success: string | null;
}
