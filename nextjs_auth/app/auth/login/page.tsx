"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { LoginFormValues } from "@/types";
import { login } from "@/actions/login";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <Card className="text-white bg-slate-900 w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          type="email"
                          placeholder="Email"
                          id="email"
                          className="text-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          type="password"
                          placeholder="Password..."
                          id="password"
                          className="text-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {success && (
                <p className="p-2 bg-green-900 rounded-lg text-center">
                  {success}
                </p>
              )}
              {error && (
                <p className="p-2 bg-red-900 rounded-lg text-center">{error}</p>
              )}
              <div className="flex flex-gap-3">
                <Link className="w-full text-black mx-3" href="/auth/register">
                  <Button variant="outline" className="w-full text-black">
                    No account?
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  className="w-full mx-3"
                  type="submit"
                  disabled={isPending}
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
