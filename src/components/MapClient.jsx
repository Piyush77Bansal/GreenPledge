"use client";
import dynamic from "next/dynamic";
import MapLegend from "@/components/MapLegend";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function MapClient() {
    return (
        <div className="relative w-full h-screen bg-gray-50">
            <MapComponent />
            <MapLegend />
        </div>
    );
}
