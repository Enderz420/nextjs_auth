import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-8xl">Authentication</h1>
        <div className="flex flex-col items-center gap-y-10">
          <Button variant="secondary">Go to login!</Button>
          <Button variant="secondary">Go to register!</Button>
        </div>
      </div>
    </main>
  );
}
