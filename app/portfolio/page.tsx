import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software de Perícia Digital e Investigação Forense | InvestigaçãoForense.com",
  description: "Plataforma de tecnologia para perícia digital, investigação forense e análise de dados. Desenvolvemos software, BI e sistemas de evidências para órgãos públicos, escritórios e compliance.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Plataforma de Tecnologia para Investigação e Perícia Digital
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Desenvolvemos software e plataformas de dados para investigação forense, perícia digital e análise de evidências. Nossas soluções combinam engenharia de software, BI, automação e ciência de dados para apoiar equipes periciais, jurídicas e de auditoria em ambientes de alta responsabilidade.
          </p>
        </div>
      </section>

      {/* PERFIL TALES */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-blue-500">
                <Image
                  src="/tales.PNG"
                  fill
                  alt="Foto de Tales Vieira"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl font-bold text-white mb-2">
                Tales Vieira
              </h2>
              <p className="text-blue-400 font-semibold mb-4">Especialista em Perícia Digital e Ciência de Dados Forense</p>
              <p className="text-gray-300 leading-relaxed">
                Perito Oficial da Polícia Civil de Minas Gerais desde 2005.
                Possui graduação e mestrado em Química pela UFMG, doutorado
                em Química pela UFLA e Pós-Doutorado em Ciência de Dados pela UFLA.
                Professor universitário e palestrante desde 2004.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pesquisador e perito atuando no desenvolvimento de métodos computacionais, IA e sistemas para investigação forense e validação de evidências digitais. Especializado em análise de dados forenses, rastreabilidade de provas e auditoria técnica.
              </p>

              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/peritotales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIL MATHEUS */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4 md:order-1 order-2">
              <h2 className="text-3xl font-bold text-white mb-2">
                Matheus Vieira
              </h2>
              <p className="text-blue-400 font-semibold mb-4">Engenheiro de Software Forense</p>
              <p className="text-gray-300 leading-relaxed">
                Graduado em Análise e Desenvolvimento de Sistemas pelo Unilavras e
                graduando pelo 4° período em Direito pela UFLA. Estagiário de Performance
                e Dados na Critéria Financial Group.
                Diretor do Grupo de Estudos em Perícia e Investigação Digital (GEPID).
              </p>
              <p className="text-gray-300 leading-relaxed">
                Desenvolvedor full-stack especializado em plataformas de investigação forense, análise de dados, automação de evidências e sistemas de laudos periciais. Atua com BI, compliance e soluções de rastreabilidade para instituições públicas e privadas.
              </p>

              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/matheusvieira-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center md:order-2 order-1">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-blue-500">
                <Image
                  src="/matheus.jpg"
                  fill
                  alt="Foto de Matheus Vieira"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projetos e Atuação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 1 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                BI para Segurança Pública e Investigação Forense (2024)
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-yellow-600/20 text-yellow-400">
                  Pesquisa Científica
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Análise de Dados Forenses
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma de análise de dados forenses e operacionais usada para apoiar decisões investigativas, auditoria e inteligência criminal. Desenvolvida no pós-doutorado em Ciência de Dados, a solução transformou informações operacionais em dashboards analíticos com rastreabilidade completa.
                Projeto apresentado na conferência internacional INTERACT 2025 (Springer).
                <br /><br />
                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-032-05008-3_17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Ver publicação científica
                </a>
              </p>
            </div>

            {/* 2 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Reconhecimento Facial para Investigação Forense (2024)
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  IA / Deep Learning
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Perícia Digital
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Sistema de análise de evidências digitais com Deep Learning para identificação facial forense, alcançando 100% de acerto em rostos individuais e 88% em imagens com múltiplos rostos. Ferramenta aplicável em investigação criminal, compliance e auditoria de imagens.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Sistema de Gestão de Evidências e Vestígios
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Software Forense
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Rastreabilidade
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma de gestão de evidências digitais e físicas com rastreabilidade completa, auditoria de acesso e geração automatizada de laudos periciais. Sistema voltado à custódia de vestígios com compliance e integridade por hash, resultando em processos 50% mais ágeis.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                MetaScope — Software de Perícia Digital
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Perícia Digital
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Análise de Evidências
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Software de perícia digital para análise de deepfakes, verificação de autenticidade e integridade de arquivos. Ferramenta essencial para investigação forense, compliance e validação de evidências digitais com 75% de precisão na detecção de manipulação por IA.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                CondoHub & Sistema de Auditoria Geolocalizada
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Gestão Corporativa
                </span>
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">
                  Compliance
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Duas plataformas complementares para gestão de condomínios e empresas. O CondoHub oferece controle de reservas, comunicados, infrações e marketplace. O Sistema de Auditoria inclui geolocalização, logs e rastreabilidade para compliance operacional.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                ScamTrace — Investigação de Fraudes Digitais
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Investigação Forense
                </span>
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Análise de Evidências
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma de investigação forense para detecção de fraudes digitais e ataques homográficos. Sistema com análise de links suspeitos, OCR avançado e rastreabilidade de evidências para compliance e segurança da informação.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Análise de Laudos Periciais com IA
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Análise de Dados Forenses
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Automação
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Sistema de análise automatizada de laudos periciais com Machine Learning. Ferramenta de investigação forense que identifica padrões em evidências digitais, reduzindo o tempo de análise de 3-4 dias para 8 horas com auditoria completa.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Perícia Digital em Dispositivos Móveis
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Perícia Digital
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Extração de Evidências
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Serviço especializado de perícia digital com extração forense de dados, análise de evidências e quebra de senhas em smartphones e mídias digitais. Expertise consolidada em investigação criminal e validação de provas digitais para uso judicial.
              </p>
            </div>

            {/* 9 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Plataforma InvestigacaoForense.com
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">
                  Forensic Data Platform
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma de tecnologia para investigação forense e perícia digital. Portal técnico com software, análise de dados forenses e sistemas de evidências desenvolvidos para apoiar peritos, investigadores e equipes de compliance.
              </p>
            </div>

          </div>

          <p className="text-center text-gray-400 italic mt-12">
            Algumas dessas aplicações podem ser demonstradas mediante solicitação.
          </p>
          <p className="text-center mt-4">
            <a href="/aplicacoes" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              🚀 Acesse aqui os MVPs em fase final de desenvolvimento
            </a>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <a href="/plataforma-dados-criticos" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              → Conheça nossa Plataforma de Dados
            </a>
            <a href="/solucoes" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              → Veja nossas Soluções
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO SEO */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Tecnologia para Investigação Forense e Perícia Digital
          </h2>
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            A Investigação Forense desenvolve software, plataformas de dados e sistemas de evidências digitais para apoiar peritos, investigadores, escritórios jurídicos e equipes de compliance. Nossas soluções incluem gestão de laudos periciais, análise de grandes volumes de dados, geolocalização, auditoria, integridade por hash e rastreabilidade de provas.
          </p>
        </div>
      </section>
    </main>
  );
}
