"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Cell } from 'recharts';

const data = [
    { species: 'Mahogany', planted: 1200, avgCO2: 0.08, area: 'Tamil Nadu', color: '#4caf50' },
    { species: 'Banyan', planted: 800, avgCO2: 0.05, area: 'Haryana', color: '#2e7d32' },
    { species: 'Teak', planted: 450, avgCO2: 0.07, area: 'Uttar Pradesh', color: '#81c784' },
];

export default function TreeSpeciesChart() {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="species" />
                <YAxis />
                <Tooltip
                    cursor={{ fill: 'rgba(200, 230, 201, 0.3)' }}
                    content={<CustomTooltip />}
                />
                <Legend content={renderLegend} />
                <Bar dataKey="planted" name="Trees Planted">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

const renderLegend = () => {
    return (
        <ul className="flex gap-4 text-sm text-gray-800 pl-2 mt-2">
            <li className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#4caf50] inline-block rounded-sm" /> Mahogany
            </li>
            <li className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#2e7d32] inline-block rounded-sm" /> Banyan
            </li>
            <li className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#81c784] inline-block rounded-sm" /> Teak
            </li>
        </ul>
    );
};

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const totalCO2 = (data.planted * data.avgCO2).toFixed(1);
        return (
            <div className="bg-white border rounded-lg shadow p-3 text-sm text-gray-800">
                <p className="font-semibold text-green-800 mb-1">{label}</p>
                <p><strong>Trees Planted:</strong> {data.planted}</p>
                <p><strong>Total CO₂ Offset:</strong> {totalCO2} tons</p>
                <p><strong>Location:</strong> {data.area}</p>
            </div>
        );
    }
    return null;
}
