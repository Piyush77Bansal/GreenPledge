"use client";
import { TrendingUp, Trees, AreaChart, Euro } from "lucide-react";

export default function CompanyDashboardPreview() {
    return (
        <section className="py-16 px-4 sm:px-8 bg-white">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
                📈 Your Company Dashboard
            </h2>

            <div className="max-w-4xl mx-auto bg-gray-50 shadow-xl rounded-xl p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
                    <div>
                        <h3 className="text-xl font-semibold text-green-700">GreenCorp Ltd.</h3>
                        <p className="text-gray-600">Advanced Sustainability Plan</p>
                    </div>

                    {/* Period Toggle */}
                    <div className="mt-3 sm:mt-0 flex bg-gray-200 rounded">
                        <button className="px-4 py-1 rounded-l bg-gray-200 hover:bg-green-600 hover:text-white transition">
                            Month
                        </button>
                        <button className="px-4 py-1 bg-green-600 text-white transition">
                            Quarter
                        </button>
                        <button className="px-4 py-1 rounded-r bg-gray-200 hover:bg-green-600 hover:text-white transition">
                            Year
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <TrendingUp className="mx-auto text-green-600 mb-2" size={24} />
                        <div className="text-2xl font-bold text-green-800">35.2</div>
                        <div className="text-xs text-gray-600">Tons of CO₂</div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <AreaChart className="mx-auto text-green-600 mb-2" size={24} />
                        <div className="text-2xl font-bold text-green-800">12</div>
                        <div className="text-xs text-gray-600">Hectares</div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <Trees className="mx-auto text-green-600 mb-2" size={24} />
                        <div className="text-2xl font-bold text-green-800">2,450</div>
                        <div className="text-xs text-gray-600">Trees Planted</div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <Euro className="mx-auto text-green-600 mb-2" size={24} />
                        <div className="text-2xl font-bold text-green-800">€15,000</div>
                        <div className="text-xs text-gray-600">Investment</div>
                    </div>
                </div>

                {/* Chart Previews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-lg h-56 flex items-center justify-center">
                        <span className="text-gray-500 italic">CO₂ Offset Evolution (Line Chart)</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-56 flex items-center justify-center">
                        <span className="text-gray-500 italic">Investment Distribution (Pie Chart)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
