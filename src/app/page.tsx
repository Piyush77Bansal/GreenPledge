import Image from "next/image";
import Link from "next/link";
import StatsSection from "@/components/home/StatsSection";
import CarbonCreditPackagesSection from "@/components/home/CarbonCreditPackagesSection";
import WhyPlanetReLeafSection from "@/components/home/WhyPlanetReLeafSection";
import InteractiveMapPreviewWrapper from "@/components/home/InteractiveMapPreviewWrapper";
import PartnerTestimonialsSection from "@/components/home/PartnerTestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";
import NavBar from "@/components/layout/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <Image
          src="/planet-releaf-logo.svg" // Same logo, larger size
          alt="Planet ReLeaf Logo"
          width={180}
          height={180}
          priority
        />

        <h2 className="text-5xl font-extrabold mt-6 text-green-800">
          Planet ReLeaf
        </h2>

        <p className="text-lg text-green-700 mt-3 max-w-md">
          A reflorestar o planeta, uma árvore de cada vez.
        </p>

        <Link href="/login">
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow">
            Login de Empresas →
          </button>
        </Link>
      </main>

      <StatsSection />
      <CarbonCreditPackagesSection id="pacotes" />
      <InteractiveMapPreviewWrapper />
      <WhyPlanetReLeafSection id="about" />
      <PartnerTestimonialsSection />
      <FinalCTA id="contacto" />

      {/* Footer */}
      <footer className="text-center py-4 text-green-800 text-sm">
        © {new Date().getFullYear()} Planet ReLeaf — All rights reserved.
      </footer>
    </div>
  );
}
