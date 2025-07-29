"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLegend from "./MapLegend";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize;
}

export default function MapComponent() {
    const [showForest, setShowForest] = useState(true);
    const { width } = useWindowSize();
    
    // Set zoom level based on screen width
    const zoomLevel = width < 768 ? 5 : 6;

    return (
        <div className="relative">
            <div className="absolute bottom-24 left-4 z-[1000]">
                <button
                    onClick={() => setShowForest(prev => !prev)}
                    className="bg-white py-2 px-4 text-sm rounded-lg shadow-xl hover:bg-gray-50 transition-colors"
                >
                    {showForest ? "Hide" : "Show"} Forest Data
                </button>
            </div>

            <MapContainer
                center={[20.5937, 78.9629]}
                zoom={zoomLevel}
                scrollWheelZoom
                className="w-full h-screen rounded-lg shadow-lg"
            >
                {/* Base map */}
                {!showForest && (
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                )}

                {/* Forest Layer */}
                {showForest && (
                    <TileLayer
                        url="https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
                        attribution="Esri World Topo"
                        opacity={0.7}
                    />
                )}

                {/* Vegetation Layer */}
                {showForest && (
                    <TileLayer
                        url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Esri Vegetation"
                        opacity={0.5}
                    />
                )}
            </MapContainer>
            <MapLegend />
        </div>
    );
}
