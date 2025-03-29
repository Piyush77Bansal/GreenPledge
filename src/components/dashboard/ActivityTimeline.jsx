"use client";
import { MapPin, CalendarCheck, Award } from "lucide-react";

const activities = [
    { date: "2025-03-01", text: "Reforestation Drone Mission completed in Serra da Estrela (250 trees).", icon: MapPin },
    { date: "2025-02-20", text: "Reached milestone: 30 tons of CO₂ offset!", icon: CalendarCheck },
    { date: "2025-02-10", text: "Earned Gold Sustainability Certification.", icon: Award },
];

export default function ActivityTimeline() {
    return (
        <section className="my-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Recent Activities</h3>
            <div className="space-y-4">
                {activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="bg-green-600 text-white rounded-full p-2">
                            <act.icon size={20} />
                        </div>
                        <div>
                            <div className="text-gray-700">{act.text}</div>
                            <div className="text-xs text-gray-500">{act.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
