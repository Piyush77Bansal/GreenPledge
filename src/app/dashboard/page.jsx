"use client";
import { TrendingUp, Trees, AreaChart, Euro } from "lucide-react";
import Link from "next/link";

export default function CompanyDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-green-800">GreenCorp Ltda.</h1>
                        <p className="text-gray-600">Plano Avançado de Sustentabilidade</p>
                    </div>
                    <Link href="/map">
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow">
                            Escolher Área para Reflorestar →
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    <StatCard icon={TrendingUp} value="35,2" label="Toneladas de CO₂" />
                    <StatCard icon={AreaChart} value="12" label="Hectares" />
                    <StatCard icon={Trees} value="2.450" label="Árvores Plantadas" />
                    <StatCard icon={Euro} value="€15.000" label="Investimento" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ChartPlaceholder title="Evolução da Compensação de CO₂ (Gráfico de Linha)" />
                    <ChartPlaceholder title="Distribuição do Investimento (Gráfico de Pizza)" />
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon: Icon, value, label }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <Icon className="mx-auto text-green-600 mb-2" size={24} />
            <div className="text-2xl font-bold text-green-800">{value}</div>
            <div className="text-xs text-gray-600">{label}</div>
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
