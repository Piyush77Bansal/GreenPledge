import SimpleNavBar from "@/components/layout/SimpleNavBar";
import MapClient from "@/components/MapClient";

export default function MapPage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <SimpleNavBar />
            <div className="p-4 bg-white shadow">
                <h1 className="text-2xl font-semibold text-green-700">Deforestation Across India</h1>
            </div>
            <div className="flex-grow">
                <MapClient />
            </div>
        </div>
    );
}
