"use client";
import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ensure droneIcon is only created on the client side
let droneIcon;
if (typeof window !== 'undefined') {
    droneIcon = new L.Icon({
        iconUrl: '/images/drone-icon.svg',
        iconSize: [45, 45],
    });
}

const droneLaunchCoords = [20.5937, 78.9629]; // Central India coordinates

const zones = [
    {
        id: "zone-1",
        name: "Nagpur Zone",
        coords: [
            [21.0800, 78.9000], // Nagpur region coordinates
            [21.2000, 79.1000],
            [21.0800, 79.1000],
            [21.0000, 78.9000],
        ],
    },
    {
        id: "zone-2",
        name: "Maharashtra Central Zone",
        coords: [
            [19.7515, 75.7139], // Maharashtra central region
            [19.9515, 75.7139],
            [19.9515, 75.9139],
            [19.7515, 75.9139],
        ],
    },
];

function MapWithZones({ onZoneSelected, droneTarget, onDroneAnimationEnd }) {
    const [selectedZone, setSelectedZone] = useState(null);
    const [dronePos, setDronePos] = useState(null);

    // Trigger drone animation when droneTarget changes
    useEffect(() => {
        if (droneTarget) {
            flyDrone(droneTarget);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [droneTarget]);

    const flyDrone = (targetCoords) => {
        setDronePos(droneLaunchCoords);
        const steps = 100;
        let currentStep = 0;
        const latStep = (targetCoords[0] - droneLaunchCoords[0]) / steps;
        const lngStep = (targetCoords[1] - droneLaunchCoords[1]) / steps;

        const interval = setInterval(() => {
            currentStep++;
            setDronePos([
                droneLaunchCoords[0] + latStep * currentStep,
                droneLaunchCoords[1] + lngStep * currentStep,
            ]);

            if (currentStep >= steps) {
                clearInterval(interval);
                // Drone animation finished; trigger callback.
                onDroneAnimationEnd && onDroneAnimationEnd();
            }
        }, 30);
    };

    const handleZoneClick = (zone) => {
        setSelectedZone(zone);
        // Immediately trigger callback to show the impact panel (no drone animation yet)
        onZoneSelected?.(zone);
    };

    if (typeof window === 'undefined') {
        return null; // Return null during SSR
    }

    return (
        <div className="w-full h-[600px] rounded-xl shadow-lg overflow-hidden">
            <MapContainer center={[20.5937, 78.9629]} zoom={7} scrollWheelZoom={true} className="w-full h-full z-0">
                <TileLayer url="https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}" />
                {zones.map((zone) => (
                    <Polygon
                        key={zone.id}
                        pathOptions={{
                            color: selectedZone?.id === zone.id ? "#2e7d32" : "#4caf50",
                            fillOpacity: 0.5,
                        }}
                        positions={zone.coords}
                        eventHandlers={{
                            click: () => handleZoneClick(zone),
                        }}
                    />
                ))}
                {dronePos && droneIcon && <Marker position={dronePos} icon={droneIcon} />}
            </MapContainer>
        </div>
    );
}

export default MapWithZones;
