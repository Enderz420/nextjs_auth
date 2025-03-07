import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-8xl">Authentication</h1>
        <div className="flex flex-col items-center gap-y-10">
          <Link href={"/auth/login"}>
            <Button variant="secondary">Go to login!</Button>
          </Link>
          <Link href={"/auth/register"}>
            <Button variant="secondary">Go to register!</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
