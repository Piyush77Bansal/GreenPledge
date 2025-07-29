"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function MapClient({ isOpen, onClose }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-all duration-500 ease-in-out ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            />
            
            {/* Map Container */}
            <div className={`fixed inset-4 z-50 bg-black-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform ${
                isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-[500] bg-white rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-black transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative w-full h-[calc(100vh-2rem)]">
                    <MapComponent />
                </div>
            </div>
        </div>
    );
}
