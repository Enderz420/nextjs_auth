"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Server() {
  const { data: session, status } = useSession();
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div>
        {JSON.stringify(session, null, 2)}
        <p>Status: {status}</p>
        <p>secret!!!! hemmelig klient dashboard</p>
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
