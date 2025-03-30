"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically load MapWithZones
const MapWithZones = dynamic(() => import("./MapWithZones"), { ssr: false });

export default function MapClientWrapper() {
    const [selectedZone, setSelectedZone] = useState(null);

    const handleZoneSelected = (zone) => {
        console.log("🚁 Zone selected in client:", zone.name);
        setSelectedZone(zone.name);

        // You could also trigger a toast, animation, or redirect here
    };

    return (
        <div>
            <MapWithZones onZoneSelected={handleZoneSelected} />

            {selectedZone && (
                <div className="mt-4 text-green-800 font-semibold text-lg text-center">
                    ✅ Drone mission launched to: <strong>{selectedZone}</strong>
                </div>
            )}
        </div>
    );
}
