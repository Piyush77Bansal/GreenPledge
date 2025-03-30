"use client";
import { TrendingUp, Trees, AreaChart, Euro, Leaf, Award, Users } from "lucide-react";
import Link from "next/link";
import CO2OffsetChart from "@/components/dashboard/CO2OffsetChart";
import TreeSpeciesChart from "@/components/dashboard/TreeSpeciesChart";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

export default function CompanyDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-green-800">GreenCorp Ltd.</h1>
                        <p className="text-gray-600">Advanced Sustainability Plan</p>
                    </div>
                    <Link href="/dashboard/map">
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow">
                            Choose Area to Reforest →
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <MetricCard icon={TrendingUp} label="CO₂ Offset" value="35.2 tons" />
                    <MetricCard icon={Trees} label="Trees Planted" value="2,450" />
                    <MetricCard icon={AreaChart} label="Hectares Restored" value="12 ha" />
                    <MetricCard icon={Euro} label="Total Investment" value="€15,000" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <MetricCard icon={Leaf} label="Cost per Ton CO₂" value="€426" />
                    <MetricCard icon={Award} label="ESG Goals Completion" value="72%" />
                    <MetricCard icon={Users} label="Community Impact" value="28 Jobs Supported" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-center text-green-800 font-semibold mb-4">Monthly CO₂ Offset vs. Target</h3>
                        <CO2OffsetChart />
                    </div>

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-center text-green-800 font-semibold mb-4">Tree Species Planted</h3>
                        <TreeSpeciesChart />
                    </div>
                </div>
                <div className="mt-8 bg-white shadow rounded-lg p-6">
                    <ActivityTimeline />
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
