// "use client";
export default function WhyPlanetReviewSection({ id }) {
    return (
        <section className="py-12 px-4 sm:px-8 bg-white text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
                Porquê escolher Planet ReLeaf?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-green-50 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-green-700">🌍 ESG & Sustentabilidade</h3>
                    <p className="text-gray-600 mt-2">
                        Alcance facilmente os seus objetivos ESG e de compensação de carbono com métricas claras.
                    </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-green-700">📊 Métricas em Tempo Real</h3>
                    <p className="text-gray-600 mt-2">
                        Impacto transparente e mensurável. Veja os resultados dos seus investimentos em tempo real.
                    </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-green-700">🤝 Impacto Corporativo</h3>
                    <p className="text-gray-600 mt-2">
                        Fortaleça a reputação da sua marca demonstrando o seu compromisso com o meio ambiente.
                    </p>
                </div>
            </div>
        </section>
    );
}
