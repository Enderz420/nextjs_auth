import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <Card className="text-white bg-slate-900 w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" className="text-black" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Password..."
              id="password"
              className="text-black"
            />
          </div>
          <div className="flex flex-gap-3">
            <Link className="w-full text-black mx-3" href="/auth/login">
              <Button variant="outline" className="w-full text-black">
                Have an account?
              </Button>
            </Link>
            <Button variant="secondary" className="w-full mx-3">
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
