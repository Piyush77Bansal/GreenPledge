"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TrendingUp, Trees, AreaChart, Euro, Leaf, Award, Users, ArrowUpRight } from "lucide-react";
import CountUp from "react-countup";
import Confetti from "react-confetti";
import Link from "next/link";
import CO2OffsetChart from "@/components/dashboard/CO2OffsetChart";
import TreeSpeciesChart from "@/components/dashboard/TreeSpeciesChart";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

export default function CompanyDashboard() {
    const searchParams = useSearchParams();
    const missionSuccess = searchParams.get("missionSuccess");

    const [treesPlanted, setTreesPlanted] = useState(2450);
    const [co2Offset, setCo2Offset] = useState(35.2);
    const [animate, setAnimate] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (missionSuccess) {
            setAnimate(true);
            setShowConfetti(true);

            setTimeout(() => {
                setTreesPlanted((prev) => prev + 250);
                setCo2Offset((prev) => prev + 4.2);
                setAnimate(false);
            }, 1500);

            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        }
    }, [missionSuccess]);

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-white to-green-50 p-4 md:p-6 lg:p-8 relative">
            {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
            <div className="max-w-[1920px] mx-auto space-y-6 lg:space-y-8">
                {/* Header */}
                <div className="relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="relative z-10 space-y-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                                GreenCorp Ltd.
                            </h1>
                            <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100/50 rounded-full border border-green-100">Pro Plan</span>
                        </div>
                        <p className="text-gray-600 text-lg">Advanced Sustainability Plan</p>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-500">Active Status</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Last updated:</span>
                                <span className="text-sm font-medium text-gray-700">Today, 2:30 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100/50 rounded-xl border border-green-100 hover:bg-green-100 transition-all duration-300 hover:shadow-lg">
                            Download Report
                        </button>
                        <Link href="/dashboard/map">
                            <button className="group relative px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-green-600 to-green-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-green-200/50 hover:shadow-xl hover:-translate-y-0.5">
                                Select Area to Reforest
                                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </Link>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute right-0 top-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-48 h-48 bg-green-50/30 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    {/* Left Column - Main Metrics + Charts */}
                    <div className="col-span-12 lg:col-span-8 space-y-4 lg:space-y-6">
                        {/* Main Metrics Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <MetricCard
                                animate={animate}
                                icon={TrendingUp}
                                label="CO₂ Offset"
                                value={co2Offset}
                                prevValue={co2Offset - 4.2}
                                suffix="tons"
                            />
                            <MetricCard
                                animate={animate}
                                icon={Trees}
                                label="Trees Planted"
                                value={treesPlanted}
                                prevValue={treesPlanted - 250}
                            />
                            <MetricCard 
                                icon={AreaChart} 
                                label="Hectares Restored" 
                                value={12}
                                suffix="ha"
                            />
                            <MetricCard 
                                icon={Euro} 
                                label="Total Invested" 
                                value={850000}
                                prefix="₹"
                            />
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold text-green-800 mb-6">
                                    Monthly CO₂ Offset vs Target
                                </h3>
                                <CO2OffsetChart />
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold text-green-800 mb-6">
                                    Tree Species Distribution
                                </h3>
                                <TreeSpeciesChart />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Additional Metrics + Timeline */}
                    <div className="col-span-12 lg:col-span-4 space-y-4 lg:space-y-6">
                        {/* Additional Metrics */}
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                            <MetricCard 
                                icon={Leaf} 
                                label="Cost per Ton of CO₂" 
                                value={41216}
                                prefix="₹"
                                className="lg:h-auto"
                            />
                            <MetricCard 
                                icon={Award} 
                                label="ESG Goals Completion" 
                                value={72}
                                suffix="%"
                                className="lg:h-auto"
                            />
                            <MetricCard 
                                icon={Users} 
                                label="Community Impact" 
                                value={28}
                                suffix="Jobs Supported"
                                className="lg:h-auto"
                            />
                        </div>

                        {/* Activity Timeline */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg max-h-[600px] overflow-y-auto">
                            
                            <div className="pr-2">
                                <ActivityTimeline />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ icon: Icon, label, value, prevValue, animate, prefix = "", suffix = "", className = "" }) {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        if (animate) {
            setShowArrow(true);
            const timeout = setTimeout(() => setShowArrow(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [animate]);

    const isNumber = typeof value === "number";

    return (
        <div 
            className={`
                relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl p-6 
                border border-green-100 shadow-lg transition-all duration-300 
                hover:shadow-xl hover:-translate-y-0.5
                ${animate ? "animate-pulse" : ""}
                ${className}
            `}
        >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-100/50 rounded-full" />
            <div className="relative flex items-start gap-4">
                <div className="p-3 bg-green-100/50 rounded-xl">
                    <Icon className="text-green-600" size={24} />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-gray-800">
                            {prefix}
                            {isNumber ? (
                                <CountUp
                                    start={animate ? prevValue : value}
                                    end={value}
                                    duration={2}
                                    separator=","
                                />
                            ) : (
                                value
                            )}
                            {" "}{suffix}
                        </div>
                        {showArrow && (
                            <ArrowUpRight size={20} className="text-green-500 animate-bounce" />
                        )}
                    </div>
                    <div className="text-sm font-medium text-gray-500">{label}</div>
                </div>
            </div>
        </div>
    );
}
