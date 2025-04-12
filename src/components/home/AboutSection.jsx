"use client";

export default function AboutSection({ id }) {
    return (
        <section
            id={id}
            className="bg-white py-16 px-4 sm:px-8 text-center text-green-900"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Sobre o Planet ReLeaf</h2>
                <p className="mb-4 max-w-2xl mx-auto">
                    O Planet ReLeaf é uma plataforma inovadora para reflorestação automática usando drones,
                    destinada a empresas que desejam compensar a sua pegada de carbono de forma eficaz, certificada e rastreável.
                </p>
                <p className="mb-4 max-w-2xl mx-auto">
                    As empresas podem visualizar zonas de reflorestação no mapa, selecionar áreas críticas
                    e contribuir diretamente para projetos verificados, obtendo créditos de carbono.
                </p>
                <p className="max-w-2xl mx-auto">
                    Através de parcerias, tecnologia autónoma e um painel dedicado, o Planet ReLeaf conecta
                    ações ambientais reais com impacto corporativo mensurável.
                </p>
            </div>
        </section>
    );
}
