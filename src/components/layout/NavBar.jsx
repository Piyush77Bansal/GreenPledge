"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            {/* logo */}
            <Link href="#hero" className="flex items-center gap-2">
                <Image src="/planet-releaf-logo.svg" alt="Planet ReLeaf logo" width={32} height={32} />
                <span className="text-lg font-bold text-green-800">Planet ReLeaf</span>
            </Link>

            {/* desktop links */}
            <div className="hidden md:flex gap-6 text-sm font-semibold text-green-800">
                <a href="#pacotes">Pacotes</a>
                <a href="#about">Sobre</a>
                <a href="#contacto">Contacto</a>
            </div>

            {/* login btn */}
            <Link href="/login" className="hidden md:block">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Login Empresas →
                </button>
            </Link>

            {/* mobile hamburger */}
            <button onClick={() => setOpen(!open)} className="md:hidden text-green-800">
                ☰
            </button>

            {/* mobile drawer */}
            {open && (
                <div
                className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col text-center gap-4 py-4"
                onClick={() => setOpen(false)}
                >
                <a href="#pacotes" className="text-green-800">Pacotes</a>
                <a href="#about" className="text-green-800">Sobre</a>
                <a href="#contacto" className="text-green-800">Contacto</a>
                <Link href="/login" className="mx-auto">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Login Empresas →
                    </button>
                </Link>
                </div>
            )}
        </nav>
    );
}
