import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Home
      </h1>
      <div className="grid gap-4 col-span-2 mt-10">
        <Button className="rounded-xl">Klikk meg!</Button>
        <Button className="rounded-xl">Klikk meg også!</Button>
      </div>
    </div>
  );
}
