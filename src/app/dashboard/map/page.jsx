import MapClientWrapper from "@/components/dashboard/MapClientWrapper";

export const dynamic = 'force-dynamic';

export default function MapPage() {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-green-800 mb-4">Select a Zone to Reforest</h1>
            <MapClientWrapper />
        </div>
    );
}
