"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet.heat";

export default function HeatmapLayer({ points }) {
    const map = useMap();

    useEffect(() => {
        const heatLayer = L.heatLayer(points, { radius: 25 }).addTo(map);
        return () => map.removeLayer(heatLayer);
    }, [points, map]);

    return null;
}
