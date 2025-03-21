import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { getUserByEmail } from "@/data/user";
import { redirect } from "next/dist/client/components/redirect";

export default async function Dashboard() {
  const session = await auth();
  console.log(JSON.stringify(session));
  if (!session) {
    redirect("/auth/login");
  }

  // Now TypeScript knows session exists
  if (!session.user?.email) {
    redirect("/auth/login");
  }
  const user = await getUserByEmail(session.user.email);

  if (!user) {
    return null;
  }
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div>
        {JSON.stringify(session)}
        <p>secret!!!!</p>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button>Logout</Button>
        </form>
        <p>Fra databasen</p>
        {user.email}
      </div>
    </main>
  );
}
