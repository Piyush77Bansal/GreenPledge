"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

function HeatmapLayer({ points }) {
    const map = useMap();

    useEffect(() => {
        if (!points.length || !map) return;

        const L = require("leaflet");
        const heat = L.heatLayer(points, {
            radius: 25,
            blur: 15,
            maxZoom: 17,
            minOpacity: 0.5,
        }).addTo(map);

        return () => {
            map.removeLayer(heat);
        };
    }, [points, map]);

    return null;
}

export default function MapComponent() {
    const [points, setPoints] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        axios.get("/api/deforestation").then((res) => {
            setPoints(res.data);
        });
    }, []);

    if (!mounted) return null;

    return (
        <MapContainer
            center={[39.5, -8]}
            zoom={7}
            scrollWheelZoom={true}
            className="w-full h-[600px] rounded-lg shadow-lg"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {points.length > 0 && <HeatmapLayer points={points} />}
        </MapContainer>
    );
}
