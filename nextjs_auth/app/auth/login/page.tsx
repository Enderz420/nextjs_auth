import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </main>
  );
}
