"use client";
import dynamic from "next/dynamic";

// Dynamically import Leaflet preview map with SSR disabled
const MapPreview = dynamic(() => import("./MapPreview"), {
    ssr: false,
});

export default function InteractiveMapPreviewWrapper() {
    return <MapPreview />;
}
