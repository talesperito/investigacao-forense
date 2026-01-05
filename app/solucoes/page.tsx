import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Soluções para Problemas Operacionais Críticos | Investigação Forense",
    description: "Sistemas para gestão de documentos regulados, auditoria, rastreabilidade e análise de dados para setores jurídico, compliance, investigação, agronegócio e setor público.",
};

export default function SolucoesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Hero */}
            <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Soluções para Problemas Operacionais Críticos
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Desenvolvemos sistemas que resolvem problemas reais em ambientes de alta responsabilidade, onde dados, documentos e decisões precisam ser confiáveis, auditáveis e rastreáveis.
                    </p>
                </div>
            </section>

            {/* Soluções */}
            <section className="py-16 px-4 bg-gray-900/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Gestão de documentos */}
                        <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4">📁 Gestão de Documentos Regulados</h2>
                            <p className="text-gray-300">
                                Sistemas para controle, versionamento e validação de documentos sensíveis.
                                Inclui histórico de alterações, aprovações e integridade por hash.
                            </p>
                        </div>

                        {/* Auditoria */}
                        <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4">📋 Auditoria e Rastreabilidade</h2>
                            <p className="text-gray-300">
                                Plataformas com logs completos, trilhas de auditoria e integridade de dados.
                                Tudo para garantir compliance e governança.
                            </p>
                        </div>

                        {/* BI */}
                        <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4">📊 Análise e BI Operacional</h2>
                            <p className="text-gray-300">
                                Dashboards e análises para decisões baseadas em dados confiáveis.
                                Visualizações interativas e métricas em tempo real.
                            </p>
                        </div>

                        {/* Automação */}
                        <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4">⚙️ Automação de Processos</h2>
                            <p className="text-gray-300">
                                Workflows automatizados para reduzir erros humanos e aumentar eficiência.
                                Integrações com sistemas existentes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Casos de Uso */}
            <section className="py-16 px-4 bg-gray-800/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Casos de Uso</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-center">
                            <span className="text-3xl mb-2 block">⚖️</span>
                            <p className="text-white font-semibold">Jurídico e Compliance</p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-center">
                            <span className="text-3xl mb-2 block">🔍</span>
                            <p className="text-white font-semibold">Investigação e Perícia</p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-center">
                            <span className="text-3xl mb-2 block">📋</span>
                            <p className="text-white font-semibold">Auditoria</p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-center">
                            <span className="text-3xl mb-2 block">🌾</span>
                            <p className="text-white font-semibold">Agronegócio</p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-center">
                            <span className="text-3xl mb-2 block">🏛️</span>
                            <p className="text-white font-semibold">Setor Público</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Tem um problema operacional crítico?</h2>
                    <p className="text-gray-300 mb-8">
                        Vamos conversar sobre como nossa tecnologia pode resolver seu desafio específico.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="/contato" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg">
                            Falar com Especialista
                        </a>
                        <a href="/plataforma-dados-criticos" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg font-semibold">
                            Conhecer a Plataforma
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
