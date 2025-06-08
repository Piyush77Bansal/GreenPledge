"use client";
import Link from "next/link";

export default function FinalCTA({ id }) {
    return (
        <section id={id} className="py-16 px-4 sm:px-8 bg-green-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Entre em Contacto</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
                Tem dúvidas, sugestões ou interesse em colaborar? Contacte diretamente o criador deste projeto.
            </p>

            <div className="flex justify-center">
                <Link href="mailto:jorgebaptista.info@gmail.com">
                    <button className="bg-white text-green-800 hover:bg-green-100 font-semibold px-6 py-3 rounded-lg shadow">
                        Enviar Email →
                    </button>
                </Link>
            </div>
        </section>
    );
}
