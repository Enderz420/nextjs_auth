import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Server() {
  const session = await auth();
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div>
        {JSON.stringify(session)}
        <p>secret!!!! hemmelig server dashboard</p>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button>Logout</Button>
        </form>
      </div>
    </main>
  );
}
