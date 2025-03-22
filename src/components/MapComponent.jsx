"use client";
import { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
    const [showDeforestation, setShowDeforestation] = useState(true);

    return (
        <div className="relative">
            <button
                onClick={() => setShowDeforestation(prev => !prev)}
                className="absolute top-2 right-2 z-[1000] bg-white py-1 px-3 text-sm rounded shadow"
            >
                {showDeforestation ? "Hide" : "Show"} Deforestation
            </button>

            <MapContainer
                center={[39.5, -8]}
                zoom={7}
                scrollWheelZoom
                className="w-full h-[600px] rounded-lg shadow-lg"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OSM contributors" />

                {showDeforestation && (
                    <TileLayer
                        url={`https://tiles.globalforestwatch.org/umd_tree_cover_loss/v1.11/tcd_30/{z}/{x}/{y}.png?x-api-key=${process.env.NEXT_PUBLIC_GFW_API_KEY}`}
                        opacity={0.4}
                        attribution="© Global Forest Watch"
                    />
                )}
            </MapContainer>
        </div>
    );
}
