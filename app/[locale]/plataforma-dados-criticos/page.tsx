import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plataforma para Dados, Documentos e Auditoria | Investigação Forense",
    description: "Desenvolvemos plataformas para ingestão, armazenamento, rastreamento e análise de dados e documentos em ambientes que exigem controle de acesso, logs, integridade e rastreabilidade.",
};

export default function PlataformaDadosCriticosPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Hero */}
            <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Plataforma para Dados, Documentos e Auditoria
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Desenvolvemos plataformas para ingestão, armazenamento, rastreamento e análise de dados e documentos em ambientes que exigem controle de acesso, logs, integridade e rastreabilidade.
                    </p>
                </div>
            </section>

            {/* O que a plataforma resolve */}
            <section className="py-16 px-4 bg-gray-900/50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">O que a plataforma resolve</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h3 className="text-xl font-bold text-white mb-3">📁 Controle de Documentos</h3>
                            <p className="text-gray-300">Controle e versionamento de documentos com histórico completo de alterações</p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h3 className="text-xl font-bold text-white mb-3">📋 Logs de Auditoria</h3>
                            <p className="text-gray-300">Logs de auditoria e rastreabilidade para compliance e governança</p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h3 className="text-xl font-bold text-white mb-3">🔐 Integridade por Hash</h3>
                            <p className="text-gray-300">Integridade e verificação por hash SHA-256 para validação de documentos</p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h3 className="text-xl font-bold text-white mb-3">📊 Dashboards e BI</h3>
                            <p className="text-gray-300">Dashboards interativos e análise de dados para decisões estratégicas</p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h3 className="text-xl font-bold text-white mb-3">⚙️ Processos Regulados</h3>
                            <p className="text-gray-300">Gestão de processos regulados com workflows automatizados</p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all">
                            <h3 className="text-xl font-bold text-white mb-3">🔒 Controle de Acesso</h3>
                            <p className="text-gray-300">Autenticação segura e controle granular de permissões por usuário</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-gray-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Pronto para implementar sua plataforma de dados?</h2>
                    <p className="text-gray-300 mb-8">
                        Entre em contato para discutir como podemos desenvolver uma solução personalizada para sua organização.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="/contato" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg">
                            Falar com Especialista
                        </a>
                        <a href="/portfolio" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg font-semibold">
                            Ver Projetos Realizados
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
