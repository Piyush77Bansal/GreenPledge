'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function WhyPlanetReLeafSection() {
  const features = [
    {
      title: '🌍 ESG & Sustainability',
      desc: 'Easily achieve your ESG and carbon offset goals with clear metrics.',
    },
    {
      title: '📊 Real-Time Metrics',
      desc: 'Transparent and measurable impact. See the results of your investments in real time.',
    },
    {
      title: '🤝 Corporate Impact',
      desc: 'Strengthen your brand reputation by demonstrating your commitment to the environment.',
    },
    {
      title: '🌱 5M+ Trees Planted',
      desc: 'Over 5 million trees planted through verified drone missions.',
    },
    {
      title: '📍 50+ Project Zones',
      desc: 'Reforestation projects across 50+ critical regions.',
    },
    {
      title: '🏢 200+ Partner Companies',
      desc: 'Trusted by leading organizations committed to sustainability.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-white text-center text-green-900">
      <h2 className="text-3xl font-bold mb-8">Why Choose GreenPledge?</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
        }}
        className="max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="h-full">
              <div className="bg-green-50 hover:shadow-xl transition-all duration-300 rounded-2xl p-6 h-[220px] sm:h-[240px] flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-green-700">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-700 mt-2">
                  {feature.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


