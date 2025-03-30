"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import ZoneImpactPanel from "@/components/dashboard/ZoneImpactPanel";

// Dynamically import MapWithZones without SSR
const MapWithZones = dynamic(() => import("./MapWithZones"), { ssr: false });

export default function MapClientWrapper() {
    const [selectedZone, setSelectedZone] = useState(null);
    const [showPanel, setShowPanel] = useState(false);
    const [droneTarget, setDroneTarget] = useState(null);
    const router = useRouter();

    // When a zone is clicked on the map, show the impact panel.
    const handleZoneSelected = (zone) => {
        // Enrich the zone with demo impact values
        const enrichedZone = {
            ...zone,
            hectares: 5,
            trees: 250,
            co2: 4.2,
            cost: 1250,
        };
        setSelectedZone(enrichedZone);
        setShowPanel(true);
    };

    // When the user confirms in the panel, start the drone animation.
    const handleConfirm = (zone) => {
        // Compute the center of the zone
        const zoneCenter = [
            zone.coords.reduce((acc, c) => acc + c[0], 0) / zone.coords.length,
            zone.coords.reduce((acc, c) => acc + c[1], 0) / zone.coords.length,
        ];
        // Set the drone target; this triggers the animation in MapWithZones
        setDroneTarget(zoneCenter);
        setShowPanel(false);
    };

    // Callback when drone animation ends.
    const handleDroneAnimationEnd = () => {
        toast.success(`🎉 Mission successful in ${selectedZone.name}!`, {
            duration: 4000,
            position: "top-center",
            style: {
                background: "#4caf50",
                color: "#fff",
                fontWeight: "bold",
            },
        });
        setTimeout(() => {
            router.push("/dashboard?missionSuccess=true");
        }, 4000);
    };

    return (
        <>
            <MapWithZones onZoneSelected={handleZoneSelected} droneTarget={droneTarget} onDroneAnimationEnd={handleDroneAnimationEnd} />
            <ZoneImpactPanel
                visible={showPanel}
                onClose={() => setShowPanel(false)}
                zoneData={selectedZone}
                onConfirm={handleConfirm}
            />
            <Toaster />
        </>
    );
}
