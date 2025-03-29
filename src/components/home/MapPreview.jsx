"use client";
import Link from "next/link";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPreview() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-12 px-4 sm:px-8 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
                Mapa Interativo
            </h2>

            <div
                className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="z-0">
                    <MapContainer
                        center={[39.5, -8]}
                        zoom={6.5}
                        scrollWheelZoom={false}
                        dragging={false}
                        doubleClickZoom={false}
                        zoomControl={false}
                        className="w-full h-[400px] z-0"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>

                <div
                    className="absolute inset-0 z-10 flex items-center justify-center transition duration-300"
                    style={{
                        backgroundColor: isHovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
                    }}
                >
                    <Link href="/map">
                        <button
                            className={`transition-opacity duration-300 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg ${isHovered ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            Explorar Mapa →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
