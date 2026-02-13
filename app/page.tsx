import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() { 
  return (
    <div>
      <div className="h-16 border-b bg-background px-6">
        <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-bold text-xl">Bloxxee</span>
            </Link>
          </div>
          <div className="hidden md:flex">
            <nav className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center">
              <div className="relative">
                <ul className="group flex flex-1 list-none items-center justify-between gap-1">
                  <li className="relative">Home</li>
                  <li className="relative">About</li>
                  <li className="relative">Contact</li>
                </ul>
              </div>
              <div className="absolute top-full left-0 isolate z-50 flex justify-center"></div>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium text-sm outline-none transition-all">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button
                variant="outline"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium text-sm outline-none transition-all"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center"></div>
    </div>
  );
}
