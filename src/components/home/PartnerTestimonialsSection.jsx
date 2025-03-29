"use client";

export default function PartnerTestimonialsSection() {
    return (
        <section className="py-12 px-4 sm:px-8 bg-white">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
                O que dizem os nossos parceiros?
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded shadow">
                    <p className="text-gray-700 italic mb-4">
                        "Parceria com a Planet ReLeaf acelerou significativamente os nossos objetivos de sustentabilidade."
                    </p>
                    <p className="font-semibold text-green-700">— CEO, GreenCorp Ltd.</p>
                </div>
                <div className="bg-green-50 p-6 rounded shadow">
                    <p className="text-gray-700 italic mb-4">
                        "Ver o nosso impacto refletido instantaneamente no painel é incrivelmente motivador."
                    </p>
                    <p className="font-semibold text-green-700">— Gestor de Sustentabilidade, EcoVision Inc.</p>
                </div>
            </div>
        </section>
    );
}
