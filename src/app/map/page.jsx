"use client";

import dynamic from "next/dynamic";

const DynamicMapComponent = dynamic(() => import("@/components/MapComponent"), {
    ssr: false,
});

export default function MapPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Deforestation Heatmap</h1>
            <DynamicMapComponent />
        </div>
    );
}
