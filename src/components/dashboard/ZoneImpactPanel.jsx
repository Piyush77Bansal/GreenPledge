"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, TreePine, Leaf, TrendingUp, Euro } from "lucide-react";

export default function ZoneImpactPanel({ visible, onClose, zoneData, onConfirm }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-40 flex items-end justify-center bg-black/30 md:items-center md:justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white w-full md:w-[400px] max-h-[90vh] rounded-t-xl md:rounded-xl p-6 shadow-lg relative"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gray-300 rounded-full" />

                        <h2 className="text-xl font-bold text-green-800 mb-4">
                            🌿 Reflorestando {zoneData?.name}
                        </h2>

                        <div className="space-y-3 text-sm text-gray-700">
                            <StatRow icon={<TreePine />} label="Hectares a Reflorestar" value={`${zoneData?.hectares ?? 5} ha`} />
                            <StatRow icon={<Leaf />} label="Árvores Estimadas" value={`${zoneData?.trees ?? 250} árvores`} />
                            <StatRow icon={<TrendingUp />} label="Ganho de CO₂ Compensado" value={`${zoneData?.co2 ?? 4.2} toneladas`} />
                            <StatRow icon={<Euro />} label="Custo Estimado" value={`€${zoneData?.cost ?? 1250}`} />
                        </div>

                        <button
                            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center gap-2"
                            onClick={() => {
                                onConfirm?.(zoneData);
                                onClose();
                            }}
                        >
                            <CheckCircle size={20} /> Lançar Missão de Reflorestação
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function StatRow({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-green-800 font-medium">
                {icon} <span>{label}</span>
            </div>
            <div className="font-semibold">{value}</div>
        </div>
    );
}
