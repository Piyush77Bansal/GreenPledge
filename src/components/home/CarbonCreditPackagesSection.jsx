"use client";
import { Leaf, Trees, MapPin } from "lucide-react";

const packages = [
    {
        title: "Sobreiro Package",
        description: "Reflorestação de sobreiros no Alentejo—uma espécie nativa resiliente a incêndios.",
        trees: 100,
        co2: 5,
        location: "Alentejo, Portugal",
        price: "€2,500",
        image: "/images/sobreiro.jpg", // Substituir por imagens reais mais tarde
    },
    {
        title: "Pinheiro Bravo Package",
        description: "Recuperação de áreas afetadas por incêndios florestais na Serra da Estrela.",
        trees: 250,
        co2: 10,
        location: "Serra da Estrela",
        price: "€5,000",
        image: "/images/pinheiro.jpg",
    },
    {
        title: "Carvalho Package",
        description: "Restauração de florestas mistas de carvalhos e espécies nativas em Trás-os-Montes.",
        trees: 500,
        co2: 25,
        location: "Trás-os-Montes",
        price: "€10,000",
        image: "/images/carvalho.jpg",
    },
];

export default function CarbonCreditPackages({ id }) {
    return (
        <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
                🌲 Comprar Créditos de Carbono
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col h-full"
                    >
                        <div
                            className="h-40 bg-cover bg-center"
                            style={{ backgroundImage: `url(${pkg.image})` }}
                        />
                        <div className="p-6 flex flex-col justify-between h-full gap-4">
                            <h3 className="text-xl font-semibold text-green-700">
                                {pkg.title}
                            </h3>
                            <p className="text-sm text-gray-600">{pkg.description}</p>

                            <div className="text-sm text-gray-700 space-y-1">
                                <div className="flex items-center gap-1">
                                    <Trees size={16} className="text-green-600" /> {pkg.trees} árvores
                                </div>
                                <div className="flex items-center gap-1">
                                    <Leaf size={16} className="text-green-600" /> {pkg.co2} toneladas de CO₂
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} className="text-green-600" /> {pkg.location}
                                </div>
                            </div>
                            <div className="text-lg font-bold text-green-800">{pkg.price}</div>
                            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded shadow transition-transform hover:-translate-y-1 duration-300">
                                🌳 Adquirir Créditos
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
