"use client";

export default function StatsSection({ id }) {
    return (
        <section className="w-full bg-green-600 text-white py-12 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-3xl sm:text-4xl font-bold">125,764</div>
                    <div className="text-sm sm:text-base mt-1">Árvores Plantadas</div>
                </div>
                <div>
                    <div className="text-3xl sm:text-4xl font-bold">5,682</div>
                    <div className="text-sm sm:text-base mt-1">Tons de CO₂ Compensados</div>
                </div>
                <div>
                    <div className="text-3xl sm:text-4xl font-bold">378</div>
                    <div className="text-sm sm:text-base mt-1">Hectares Restaurados</div>
                </div>
                <div>
                    <div className="text-3xl sm:text-4xl font-bold">84</div>
                    <div className="text-sm sm:text-base mt-1">Empresas Parceiras</div>
                </div>
            </div>
        </section>
    );
}
