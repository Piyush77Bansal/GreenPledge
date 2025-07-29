"use client";
import { Leaf, Trees, MapPin } from "lucide-react";

const packages = [
  {
    title: "Neem Tree Package",
    description: "Plant Neem trees in Bundelkhand to restore degraded drylands and improve local ecosystems.",
    trees: 100,
    co2: 25,
    location: "Bundelkhand, Uttar Pradesh",
    price: "₹25,000",
    image: "/images/neem.jpg",
  },
  {
    title: "Sal Tree Package",
    description: "Reforest native Sal trees in Chotanagpur, Jharkhand — ideal for restoring biodiversity in mined landscapes.",
    trees: 250,
    co2: 62.5,
    location: "Chotanagpur, Jharkhand",
    price: "₹50,000",
    image: "/images/sal.jpg",
  },
  {
    title: "Teak Tree Package",
    description: "Support Teak replantation in Wayanad, Kerala — strengthening the Western Ghats’ rainforest belt.",
    trees: 500,
    co2: 125,
    location: "Wayanad, Kerala",
    price: "₹1,00,000",
    image: "/images/teak.jpg",
  },
  {
    title: "Babul Tree Package",
    description: "Help revive the Aravalli hills with Babul trees — native to Rajasthan's dry forest ecosystem.",
    trees: 100,
    co2: 25,
    location: "Aravalli Hills, Rajasthan",
    price: "₹25,000",
    image: "/images/babul.jpg",
  },
  {
    title: "Hollong Tree Package",
    description: "Plant endangered Hollong trees in Assam — strengthening forests near Kaziranga National Park.",
    trees: 250,
    co2: 62.5,
    location: "Kaziranga, Assam",
    price: "₹50,000",
    image: "/images/hollong.jpg",
  },
  {
    title: "Mangrove Tree Package",
    description: "Restore Sundarbans' coastline with Mangrove trees — protecting biodiversity and preventing erosion.",
    trees: 500,
    co2: 125,
    location: "Sundarbans, West Bengal",
    price: "₹1,00,000",
    image: "/images/mangrove.jpg",
  },
];


export default function CarbonCreditPackages({ id }) {
  return (
    <section id={id} className="py-16 px-4 sm:px-8 bg-green-100">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
        🌲 Purchase Carbon Credits 🌲
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col group"
          >
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${pkg.image})` }}
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-1">{pkg.title}</h3>
                <p className="text-gray-700 text-sm">{pkg.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 text-sm text-green-800 font-medium gap-2">
                <div className="flex items-center gap-1">
                  <Trees size={16} /> {pkg.trees} trees
                </div>
                <div className="flex items-center gap-1">
                  <Leaf size={16} /> {pkg.co2} t CO₂
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> {pkg.location}
                </div>
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-2">
                <div className="text-lg font-bold text-green-700">{pkg.price}</div>
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md hover:bg-green-800 active:scale-95 transition-all duration-200 ring-1 ring-green-900/10">
                  Buy Credits
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
