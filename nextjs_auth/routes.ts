/***
 * Public routes accessible by anyone.
 * @type {string[]}
 */

export const publicRoutes: string[] = ["/"];

/***
 * Private routes are accessible only by logging in.
 * These routes will redirect logged in users to /dashboard.
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/register", "/auth/login"];

/***
 * Prefix for API authentication routes.
 * Routes that start with this prefix are used for API
 * auth purposes.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/***
 * Default redirect path after login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
