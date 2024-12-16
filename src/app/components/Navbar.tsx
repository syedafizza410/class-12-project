"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003366] w-full py-4 px-6 overflow-hidden">
      <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src="/Logo icon.png" alt="Logo" width={30} height={50} />
          <Link href="/">
            <span className="text-white text-3xl font-bold cursor-pointer">
              Whitepace
            </span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4 text-xl">
          <Link
            href="/login"
            className="bg-[#FFDD55] text-black px-4 py-2 rounded hover:bg-[#F2C94C]"
          >
            Login
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 absolute md:relative top-16 md:top-0 left-0 bg-[#003366] md:bg-transparent w-full md:w-auto`}
        >
          <Link
            href="/products"
            className="block text-white hover:text-gray-300 py-2 px-4 md:p-0"
          >
            Products
          </Link>
          <Link
            href="/solutions"
            className="block text-white hover:text-gray-300 py-2 px-4 md:p-0"
          >
            Solutions
          </Link>
          <Link
            href="/resources"
            className="block text-white hover:text-gray-300 py-2 px-4 md:p-0"
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className="block text-white hover:text-gray-300 py-2 px-4 md:p-0"
          >
            Pricing
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-[#FFDD55] text-black px-4 py-2 rounded hover:bg-[#F2C94C]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
