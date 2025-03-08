import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-y-4 mx-auto max-w-sm">
            <label
              htmlFor="email"
              className="text-gray-700 font-medium text-sm uppercase tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              className="rounded-xl border-2 border-gray-700 focus:border-pink-600 shadow-xl m-2 px-4 py-2"
              name="email"
            />
            <label
              htmlFor="password"
              className="text-gray-700 font-medium text-sm uppercase tracking-wide"
            >
              Password
            </label>
            <input
              type="password"
              className="border-2 border-gray-700 focus:border-pink-600 shadow-xl rounded-lg m-2 px-4 py-2 "
              name="password"
            />
            <Button variant="secondary">Login</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
