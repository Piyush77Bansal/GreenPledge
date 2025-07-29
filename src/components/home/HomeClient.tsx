"use client";

import Image from "next/image";
import { useState } from "react";
import AboutSection from "./AboutSection";
import WhyPlanetReLeafSection from "./WhyPlanetReLeafSection";
import InteractiveMapPreviewWrapper from "./InteractiveMapPreviewWrapper";
import FinalCTA from "./FinalCTA";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import LoginModal from "../layout/LoginModal";

export default function HomeClient() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div id="hero" className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      {/* Navbar */}
      <NavBar />

      <main className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/forest-bg.jpg"
            alt="Canopy Background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="brightness-[0.75] blur-[0.5px]"
            priority
          />
        </div>

        {/* Overlay for improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-green-100/30 z-0" />

        <div className="relative z-10 text-center px-6 py-10 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight drop-shadow">
            Reforest the Planet, One Tree at a Time 🌿
          </h1>

          <p className="mt-4 text-lg md:text-xl text-green-800">
            Let's grow the impact together!
          </p>

          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            Login
          </button>
        </div>
      </main>
      
      <AboutSection id="about" />
      <WhyPlanetReLeafSection />
      <InteractiveMapPreviewWrapper />
      <FinalCTA id="contact" />

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
} 