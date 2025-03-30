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

            // Simulate metrics update after drone mission success
            setTimeout(() => {
                setTreesPlanted((prev) => prev + 250);
                setCo2Offset((prev) => prev + 4.2);
                setAnimate(false);
            }, 1500);

            // Stop confetti after a few seconds
            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        }
    }, [missionSuccess]);

    return (

        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8 relative">
            {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-green-800">GreenCorp Ltd.</h1>
                        <p className="text-gray-600">Plano de Sustentabilidade Avançado</p>
                    </div>
                    <Link href="/dashboard/map">
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow">
                            Escolher Área para Reflorestar →
                        </button>
                    </Link>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <MetricCard
                        animate={animate}
                        icon={TrendingUp}
                        label="Compensação de CO₂"
                        value={co2Offset}
                        prevValue={co2Offset - 4.2}
                    />
                    <MetricCard
                        animate={animate}
                        icon={Trees}
                        label="Árvores Plantadas"
                        value={treesPlanted}
                        prevValue={treesPlanted - 250}
                    />
                    <MetricCard icon={AreaChart} label="Hectares Restaurados" value="12 ha" />
                    <MetricCard icon={Euro} label="Total Investido" value="€15,000" />
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <MetricCard icon={Leaf} label="Custo por Tonelada de CO₂" value="€426" />
                    <MetricCard icon={Award} label="Conclusão de Metas ESG" value="72%" />
                    <MetricCard icon={Users} label="Impacto na Comunidade" value="28 Empregos Apoiados" />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-center text-green-800 font-semibold mb-4">
                            Compensação Mensal de CO₂ vs. Meta
                        </h3>
                        <CO2OffsetChart />
                    </div>

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-center text-green-800 font-semibold mb-4">
                            Espécies de Árvores Plantadas
                        </h3>
                        <TreeSpeciesChart />
                    </div>
                </div>

                {/* Activity Timeline */}
                <div className="mt-8 bg-white shadow rounded-lg p-6">
                    <ActivityTimeline />
                </div>
            </div>
        </div>
    );
}

function MetricCard({ icon: Icon, label, value, prevValue, animate }) {
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
            className={`bg-white rounded-lg shadow p-4 flex items-center gap-4 ${animate ? "animate-pulse" : ""
                }`}
        >
            <Icon className="text-green-600" size={28} />
            <div className="relative">
                <div className="flex items-center gap-1 text-xl font-semibold text-green-800">
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
                    {showArrow && (
                        <ArrowUpRight size={18} className="text-green-500 animate-bounce" />
                    )}
                </div>
                <div className="text-sm text-gray-500">{label}</div>
            </div>
        </div>
    );
}
