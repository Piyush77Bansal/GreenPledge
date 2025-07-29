"use client";

export default function Footer() {
    return (
        <footer className="bg-green-50 border-t border-green-200 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-green-800 text-sm">
                <p className="mb-2 md:mb-0">
                    © {new Date().getFullYear()} <span className="font-semibold">GreenPledge</span> — All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="/privacy" className="hover:text-green-600 transition">Privacy Policy</a>
                    <a href="/terms" className="hover:text-green-600 transition">Terms of Use</a>
                    <a href="/contact" className="hover:text-green-600 transition">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}
