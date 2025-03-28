"use client";
export default function MapLegend() {
    return (
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-md p-4 rounded-lg shadow-xl z-[1000] text-gray-800">
            <h4 className="font-semibold text-sm mb-2">Deforestation Intensity</h4>
            <div className="flex items-center gap-2 text-xs">
                <span className="w-4 h-4 bg-red-800 rounded-sm"></span> High
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
                <span className="w-4 h-4 bg-orange-400 rounded-sm"></span> Medium
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
                <span className="w-4 h-4 bg-yellow-300 rounded-sm"></span> Low
            </div>
        </div>
    );
}
