"use client";
import Link from "next/link";

export default function FinalCTA({ id }) {
  return (
  <section
    id={id}
    className="py-20 px-6 sm:px-12 bg-white text-center relative overflow-hidden"
  >
    <div className="max-w-4xl mx-auto bg-green-900 p-10 rounded-2xl shadow-2xl border border-green-800">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">
        Let’s Connect!
      </h2>
      <p className="text-base sm:text-lg text-white mb-8 leading-relaxed font-normal">
        Have questions, feedback, or collaboration ideas? <br /> We’d love to hear from you.
      </p>

      <div className="flex justify-center">
        <Link href="mailto:4.drishti@gmail.com">
          <button className="bg-green-100 text-green-900 hover:bg-green-200 transition-all duration-300 font-medium px-8 py-4 rounded-full shadow-md hover:scale-105">
            🌱 Send Email
          </button>
        </Link>
      </div>
    </div>
  </section>
);

}

