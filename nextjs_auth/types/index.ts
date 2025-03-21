import { LoginSchema, RegisterSchema } from "@/schemas";
import { z } from "zod";

export type LoginFormValues = z.infer<typeof LoginSchema>;
export type RegisterFormValues = z.infer<typeof RegisterSchema>;

export interface AuthResponse {
  error: string | null;
  success: string | null;
}
