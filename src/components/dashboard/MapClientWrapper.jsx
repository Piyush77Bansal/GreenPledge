"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const MapWithZones = dynamic(() => import("./MapWithZones"), { ssr: false });

export default function MapClientWrapper() {
    const [selectedZone, setSelectedZone] = useState(null);
    const router = useRouter();

    const handleZoneSelected = (zone) => {
        setSelectedZone(zone.name);

        toast.success(`🎉 Mission successful in ${zone.name}!`, {
            duration: 4000,
            position: 'top-center',
            style: {
                background: '#4caf50',
                color: '#fff',
                fontWeight: 'bold',
            },
        });

        setTimeout(() => {
            router.push('/dashboard?missionSuccess=true');
        }, 4000);
    };

    return (
        <div>
            <MapWithZones onZoneSelected={handleZoneSelected} />
            <Toaster />
        </div>
    );
}
