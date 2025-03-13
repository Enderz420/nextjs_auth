import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-evenly w-full py-2 bg-slate-950 text-white">
      <div>
        <Link className="mx-2 outline-gray-500" href="/">
          Home
        </Link>
        <Link className="mx-2 outline-gray-500" href="/auth/register">
          Register
        </Link>
        <Link className="mx-2 outline-gray-500" href="/auth/login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
