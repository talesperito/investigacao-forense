import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | InvestigacaoForense.com",
  description: "Portfólio profissional de Tales Vieira e Matheus Vieira.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-gray-300">
            Conheça os profissionais responsáveis pelo desenvolvimento das nossas
            soluções e alguns dos projetos realizados ao longo dos últimos anos.
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Tales Vieira
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Perito Oficial da Polícia Civil de Minas Gerais desde 2005.
                Possui graduação e mestrado em Química pela UFMG, doutorado
                em Química pela UFLA e Pós-Doutorado em Ciência de Dados pela UFLA.
                Professor universitário e palestrante desde 2004.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Atua em perícias digitais, ciência de dados, segurança pública,
                desenvolvimento de sistemas e automações aplicadas a processos
                investigativos e institucionais.
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Matheus Vieira
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Graduado em Análise e Desenvolvimento de Sistemas e graduando em
                Direito pela UFLA. Diretor do Grupo de Estudos em Perícia e
                Investigação Digital (GEPID).
              </p>
              <p className="text-gray-300 leading-relaxed">
                Atua com desenvolvimento full stack, BI, automações e soluções
                aplicadas à segurança pública e investigação digital.
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
                BI para Segurança Pública (2024)
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-yellow-600/20 text-yellow-400">
                  Pesquisa Científica
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Data Science
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma de gestão pericial e análise de dados desenvolvida no
                pós-doutorado em Ciência de Dados. Projeto apresentado na
                conferência internacional INTERACT 2025 (Springer).
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
                Reconhecimento Facial com IA (2024)
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  IA / Deep Learning
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Forense Digital
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Sistema em Python com Deep Learning e encodings faciais, alcançando
                100% de acerto em rostos individuais e 88% em imagens com múltiplos
                rostos.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Sistema de Gestão de Vestígios
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Produto / Sistema
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Forense
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Aplicação web com autenticação e relatórios automatizados,
                reduzindo em cerca de 50% o tempo de gestão e localização de
                vestígios.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                MetaScope Forense
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Forense Digital
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  IA
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Aplicação web para detecção de deepfakes e verificação de
                autenticidade digital, com cerca de 75% de precisão em testes.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Ponto Eletrônico Georreferenciado
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Sistema
                </span>
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">
                  Geolocalização
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Sistema de ponto eletrônico com logs e geolocalização de alta
                precisão, projetado para substituir bastões de ronda.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                ScamTrace – Rastreamento de Fraudes
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Segurança
                </span>
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Web App
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Aplicação para identificação de links suspeitos e ataques
                homográficos, com OCR para caracteres não latinos.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Análise de Relatórios com Machine Learning
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  IA / NLP
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Script em Python que reduziu o tempo de análise de relatórios de
                3–4 dias para cerca de 8 horas.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Extração de Dados de Smartphones
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Forense Computacional
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Atuação contínua em extração de dados e quebra de senhas utilizando
                ferramentas forenses profissionais.
              </p>
            </div>

            {/* 9 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Desenvolvimento do site InvestigacaoForense.com
              </h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">
                  Web / SEO
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Site institucional desenvolvido com SEO avançado e excelente
                posicionamento nos buscadores.
              </p>
            </div>

          </div>

          <p className="text-center text-gray-400 italic mt-12">
            Algumas dessas aplicações podem ser demonstradas mediante solicitação.
          </p>
        </div>
      </section>
    </main>
  );
}
