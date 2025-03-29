"use client";
import { TrendingUp, Trees, AreaChart, Euro, Leaf, Award, Users } from "lucide-react";
import Link from "next/link";

export default function CompanyDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-green-800">GreenCorp Ltd.</h1>
                        <p className="text-gray-600">Advanced Sustainability Plan</p>
                    </div>
                    <Link href="/map">
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow">
                            Choose Area to Reforest →
                        </button>
                    </Link>
                </div>

                {/* High-level ESG Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <MetricCard icon={TrendingUp} label="CO₂ Offset" value="35.2 tons" />
                    <MetricCard icon={Trees} label="Trees Planted" value="2,450" />
                    <MetricCard icon={AreaChart} label="Hectares Restored" value="12 ha" />
                    <MetricCard icon={Euro} label="Total Investment" value="€15,000" />
                </div>

                {/* Additional Metrics (impactful) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <MetricCard icon={Leaf} label="Cost per Ton CO₂" value="€426" />
                    <MetricCard icon={Award} label="ESG Goals Completion" value="72%" />
                    <MetricCard icon={Users} label="Community Impact" value="28 Jobs Supported" />
                </div>

                {/* Charts placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ChartPlaceholder title="Monthly CO₂ Offset vs. Target" />
                    <ChartPlaceholder title="Forest Health Index (Simulated)" />
                </div>
            </div>
        </div>
    );
}

function MetricCard({ icon: Icon, label, value }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
            <Icon className="text-green-600" size={28} />
            <div>
                <div className="text-xl font-semibold text-green-800">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
            </div>
        </div>
    );
}

function ChartPlaceholder({ title }) {
    return (
        <div className="bg-gray-100 rounded-lg h-56 flex items-center justify-center">
            <span className="text-gray-500 italic">{title}</span>
        </div>
    );
}
