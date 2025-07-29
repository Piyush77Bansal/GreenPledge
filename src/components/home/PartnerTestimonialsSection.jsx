"use client";

export default function PartnerTestimonialsSection() {
    return (
        <section className="py-12 px-4 sm:px-8 bg-white">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
                What Our Partners Say 🪴
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded shadow">
                    <p className="text-gray-700 italic mb-4">
                        "Partnering with GreenPledge significantly accelerated our sustainability goals."
                    </p>
                    <p className="font-semibold text-green-700">— CEO, GreenCorp Ltd.</p>
                </div>
                <div className="bg-green-50 p-6 rounded shadow">
                    <p className="text-gray-700 italic mb-4">
                        "Seeing our impact reflected instantly on the dashboard is incredibly motivating."
                    </p>
                    <p className="font-semibold text-green-700">— Sustainability Manager, EcoVision Inc.</p>
                </div>
            </div>
        </section>
    );
}
