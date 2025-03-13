import * as z from "zod";

export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, {
		message: "Password cannot be empty",
	}),
});

export const RegisterSchema = z.object({
	name: z.string().min(1, {
		message: "Username cannot be empty",
	}),
	email: z.string().email(),
	password: z.string().min(6, {
		message: "Password must be 6 characters or more",
	}),
});
