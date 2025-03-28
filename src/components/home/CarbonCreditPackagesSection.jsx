"use client";
import { Leaf, Trees, MapPin } from "lucide-react";

const packages = [
    {
        title: "Sobreiro Package",
        description: "Cork oaks reforestation in Alentejo—a native species resilient to fires.",
        trees: 100,
        co2: 5,
        location: "Alentejo, Portugal",
        price: "€2,500",
        image: "/images/sobreiro.jpg", // Replace with real images later
    },
    {
        title: "Pinheiro Bravo Package",
        description: "Recovering areas impacted by wildfires in Serra da Estrela.",
        trees: 250,
        co2: 10,
        location: "Serra da Estrela",
        price: "€5,000",
        image: "/images/pinheiro.jpg",
    },
    {
        title: "Carvalho Package",
        description: "Mixed oak and native forest restoration in Trás-os-Montes.",
        trees: 500,
        co2: 25,
        location: "Trás-os-Montes",
        price: "€10,000",
        image: "/images/carvalho.jpg",
    },
];

export default function CarbonCreditPackages() {
    return (
        <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
                🌲 Purchase Carbon Credits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
                    >
                        <div
                            className="h-40 bg-cover bg-center"
                            style={{ backgroundImage: `url(${pkg.image})` }}
                        />
                        <div className="p-6 flex flex-col justify-between h-full">
                            <h3 className="text-xl font-semibold text-green-700 mb-2">
                                {pkg.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {pkg.description}
                            </p>
                            <div className="text-sm mb-4 text-gray-700">
                                <div className="flex items-center gap-1 mb-1">
                                    <Trees size={16} className="text-green-600" /> {pkg.trees} trees
                                </div>
                                <div className="flex items-center gap-1 mb-1">
                                    <Leaf size={16} className="text-green-600" /> {pkg.co2} tons of CO₂
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} className="text-green-600" /> {pkg.location}
                                </div>
                            </div>
                            <div className="text-lg font-bold text-green-800 mb-4">
                                {pkg.price}
                            </div>
                            <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                                Buy Credits
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
