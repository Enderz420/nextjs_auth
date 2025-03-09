import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="bg-slate-700 text-white">
      <nav className="flex justify-evenly w-screen py-2">
        <div>
          <Link className="mx-2 outline-gray-500" href="/">
            <Button variant="default" className="text-white">
              Home
            </Button>
          </Link>
          <Link className="mx-2 outline-gray-500" href="/auth/register">
            <Button variant="default" className="text-white">
              Register
            </Button>
          </Link>
          <Link className="mx-2 outline-gray-500" href="/auth/login">
            <Button variant="default" className="text-white">
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
