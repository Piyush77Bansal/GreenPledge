"use client";
import { motion } from "framer-motion";

export default function AboutSection({ id }) {
  return (
    <section
      id={id}
      className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 sm:px-10 text-green-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-green-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About GreenPledge
        </motion.h2>

        <motion.div
          className="space-y-5 text-base md:text-lg leading-relaxed bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            GreenPledge is a purpose-driven platform empowering companies to take meaningful environmental action through reforestation. 
          </p>
          <p>
            Businesses can explore deforestation-affected zones across India using our interactive map, identify high-priority regions and fund verified tree-planting initiatives — all while working toward sustainability goals and earning environmental credits.
          </p>
          <p>
            Through strategic partnerships, smart technology and a powerful corporate dashboard, GreenPledge transforms environmental responsibility into measurable, real-world impact — making it easy for businesses to grow their brand by growing the planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
