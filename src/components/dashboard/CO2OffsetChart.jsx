"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const data = [
    { month: 'Jan', target: 3, actual: 2.5 },
    { month: 'Feb', target: 3, actual: 3.1 },
    { month: 'Mar', target: 3, actual: 2.8 },
    { month: 'Apr', target: 3, actual: 3.5 },
    { month: 'May', target: 3, actual: 3.7 },
    { month: 'Jun', target: 3, actual: 4.0 },
];

export default function CO2OffsetChart() {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis unit="t" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="target" name="Target" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#2e7d32" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}
