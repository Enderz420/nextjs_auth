import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schemas";
import { NextAuthConfig } from "next-auth";

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields.data;
					const user = await getUserByEmail(email);

					if (!user) return null;

					const passwordsMatch = await bcrypt.compare(password, user.password);

					if (passwordsMatch) return user;
				}
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
