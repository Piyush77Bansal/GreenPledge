import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 text-center p-8">
      {/* Logo */}
      <Image
        src="/planet-releaf-logo.svg" // Replace with actual logo path
        alt="Planet ReLeaf Logo"
        width={180}
        height={180}
        priority
      />

      {/* Title */}
      <h1 className="text-5xl font-extrabold mt-6 text-green-800">
        Planet ReLeaf
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-green-700 mt-3 max-w-md">
        Reforesting the planet, one tree at a time.
      </p>
    </div>
  );
}
