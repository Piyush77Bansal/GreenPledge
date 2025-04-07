"use client";
import Link from "next/link";
import Image from "next/image";

export default function SimpleNavBar() {
    return (
        <nav className="w-full bg-white/95 shadow flex items-center justify-between px-6 py-3 sticky top-0 z-40">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/planet-releaf-logo.svg" alt="Planet ReLeaf Logo" width={32} height={32} />
                <span className="text-lg font-bold text-green-800">Planet ReLeaf</span>
            </Link>
            <Link href="/" className="text-green-700 hover:underline font-semibold">← Home</Link>
        </nav>
    );
}
