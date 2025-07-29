"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsAnimating(false);
        // Wait for animation to complete before closing
        setTimeout(() => {
            onClose();
        }, 500); // Increased from 300ms to 500ms
    };

    const handleLogin = () => {
        router.push("/dashboard");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ease-in-out ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            />
            
            {/* Modal Content */}
            <div className={`bg-white shadow-xl rounded-lg p-8 w-full max-w-md relative z-50 transition-all duration-500 ease-in-out transform ${
                isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                    ✕
                </button>
                
                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                    Company Login
                </h2>

                <label className="block text-gray-700 mb-2">Company Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow duration-300"
                    placeholder="company@example.com"
                    defaultValue="greencorp@example.com"
                />

                <label className="block text-gray-700 mb-2">Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-shadow duration-300"
                    placeholder="••••••••"
                    defaultValue="password123"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors duration-300"
                >
                    Login
                </button>
            </div>
        </div>
    );
} 