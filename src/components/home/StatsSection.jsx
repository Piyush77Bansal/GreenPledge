"use client";

export default function StatsSection() {
  const stats = [
    { value: "125,764", label: "Trees Planted" },
    { value: "5,682", label: "Tons of CO₂ Offset" },
    { value: "378", label: "Hectares Restored" },
    { value: "84", label: "Partner Companies" },
  ];

  return (
    <section className="w-full bg-[#F0FAF4] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition"
          >
            <div className="text-4xl font-bold text-[#1A4D2E]">{stat.value}</div>
            <div className="text-base mt-2 text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
