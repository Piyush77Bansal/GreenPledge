import MapClientWrapper from "@/components/dashboard/MapClientWrapper";

export default function MapPage() {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-green-800 mb-4">Seleccione uma Zona para Reforestar</h1>
            <MapClientWrapper />
        </div>
    );
}
