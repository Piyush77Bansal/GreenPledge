"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-sm w-full flex items-center justify-between rounded-2xl border border-green-200">
      {/* Logo */}
      <Link href="/#hero" className="flex items-center gap-2 text-2xl">
        <span role="img" aria-label="tree" className="text-2xl">
          🌳
        </span>
        <span className="font-semibold text-[#1A4D2E] tracking-wide">GreenPledge</span>
      </Link>


      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-10 text-base font-medium text-[#1A4D2E] pr-4">
        <a href="/#about" className="hover:text-green-600 transition">
          About
        </a>
        <a href="/packages" className="hover:text-green-600 transition">
          Packages
        </a>

        <a href="/#contact" className="hover:text-green-600 transition">
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-[#1A4D2E] text-2xl ml-auto"
      >
        ☰
      </button>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="w-full bg-white text-[#1A4D2E] shadow-md md:hidden flex flex-col items-center gap-4 py-6 rounded-b-2xl"
          onClick={() => setOpen(false)}
        >
          <a href="#pacotes" className="hover:text-green-600 text-lg">
            Packages
          </a>
          <a href="#about" className="hover:text-green-600 text-lg">
            About
          </a>
          <a href="#contacto" className="hover:text-green-600 text-lg">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
