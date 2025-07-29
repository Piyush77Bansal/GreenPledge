"use client";
import Link from "next/link";
import Image from "next/image";

export default function SimpleNavBar() {
    return (
        <nav className="w-full bg-white/95 shadow flex items-center justify-between px-6 py-3 sticky top-0 z-40">
            <Link href="/" className="flex items-center gap-2">
                <span role="img" aria-label="tree" className="text-2xl">
                🌳
                </span>
                <span className="text-lg font-bold text-green-800">GreenPledge</span>
            </Link>
            <Link href="/" className="text-green-700 hover:underline font-semibold">Home</Link>
        </nav>
    );
}
