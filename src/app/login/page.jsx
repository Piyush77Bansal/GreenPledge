"use client";
import { useRouter } from "next/navigation";
import SimpleNavBar from "@/components/layout/SimpleNavBar"; // <-- import at the top

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/dashboard");
    };

    return (
        <>
            <SimpleNavBar />   {/* 👈 add this right here */}
            <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex items-center justify-center p-4">
                <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                        Login Empresa
                    </h2>

                    <label className="block text-gray-700 mb-2">Email da Empresa</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="company@example.com"
                        defaultValue="greencorp@example.com"
                    />

                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="••••••••"
                        defaultValue="password123"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                    >
                        Login →
                    </button>
                </div>
            </div>
        </>
    );
}
