import Image from "next/image";
import Link from "next/link";
import StatsSection from "@/components/home/StatsSection";
import CarbonCreditPackagesSection from "@/components/home/CarbonCreditPackagesSection";
import WhyPlanetReLeafSection from "@/components/home/WhyPlanetReLeafSection";
import InteractiveMapPreviewWrapper from "@/components/home/InteractiveMapPreviewWrapper";
import PartnerTestimonialsSection from "@/components/home/PartnerTestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      {/* Navbar */}
      <nav className="bg-transparent py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/planet-releaf-logo.svg"
            alt="Planet ReLeaf Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold text-green-800">Planet ReLeaf</h1>
        </div>
        <Link href="/map">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Explore Map →
          </button>
        </Link>
      </nav>

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

        <Link href="/map">
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow">
            Launch Interactive Map
          </button>
        </Link>
      </main>

      <StatsSection />
      <CarbonCreditPackagesSection />
      <WhyPlanetReLeafSection />
      <InteractiveMapPreviewWrapper />
      <PartnerTestimonialsSection />
      <FinalCTA />

      <footer className="text-center py-4 text-green-800 text-sm">
        © {new Date().getFullYear()} Planet ReLeaf — All rights reserved.
      </footer>
    </div>
  );
}
