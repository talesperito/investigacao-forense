import Image from "next/image";

export const metadata = {
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
              <h2 className="text-3xl font-bold text-white mb-4">Tales Vieira</h2>
              <p className="text-gray-300 leading-relaxed">
                Criminalista, Perito Oficial da Polícia Civil de Minas Gerais desde
                2005, Pós-Doutor em Ciência de Dados pela UFLA e professor
                universitário. Atua em perícias digitais, ciência de dados,
                segurança pública, desenvolvimento de sistemas e automações
                aplicadas a processos periciais e investigativos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Experiência em Python, Power BI, análise forense, big data,
                machine learning, integridade de provas digitais e desenvolvimento
                de soluções tecnológicas para órgãos públicos.
              </p>
              
              {/* Links LinkedIn */}
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/peritotales/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
              <h2 className="text-3xl font-bold text-white mb-4">Matheus Vieira</h2>
              <p className="text-gray-300 leading-relaxed">
                Estudante de Direito (UFLA) e Análise e Desenvolvimento de Sistemas
                (Unilavras). Integrante do Grupo de Estudos em Informática Forense e
                Cibersegurança, atua no desenvolvimento de sistemas, Python,
                reconhecimento facial, BI e soluções aplicadas à segurança pública.
                Inglês avançado e forte foco em tecnologia e direito.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Diretor do GEPID (2025–atual) e Estagiário na Critéria (2025–atual).
                Desenvolve automações, sistemas web e scripts aplicados a
                investigações digitais.
              </p>
              
              {/* Links LinkedIn */}
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/matheusvieira-dev/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                BI para Segurança Pública (2024)
              </h3>
              <p className="text-gray-300 text-sm">
                Construção de dashboards Power BI para avaliação de gestão de
                laudos e deslocamentos periciais. Trabalho apresentado no
                Interact 2025 (evento nível A em TI).
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                Reconhecimento Facial com IA (2024)
              </h3>
              <p className="text-gray-300 text-sm">
                Desenvolvimento de modelo de Deep Learning em Python para
                implementação em banco de dados oficial da Polícia Civil de MG.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                Sistema de Gestão de Vestígios (2023–2024)
              </h3>
              <p className="text-gray-300 text-sm">
                Sistema em JavaScript com autenticação Google Drive para controle
                de vestígios da Unidade Regional de Custódia de Lavras/MG.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                Ponto Eletrônico Georreferenciado (2024–2025)
              </h3>
              <p className="text-gray-300 text-sm">
                MVP em TypeScript + React para registro de ponto e rondas sem
                necessidade de totens físicos.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                MetaScope Forense (2023–2024)
              </h3>
              <p className="text-gray-300 text-sm">
                Aplicação web para análise forense digital, leitura de metadados,
                detecção de manipulação por IA, hash SHA-256 e geração de laudos
                técnicos via navegador.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                ScamTrace – Rastreamento de Fraudes
              </h3>
              <p className="text-gray-300 text-sm">
                SPA em React 19 + Tailwind que analisa mensagens suspeitas (SMS,
                WhatsApp, e-mail) e detecta phishing usando IA Gemini.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                Extração de Dados de Smartphones (2022–atual)
              </h3>
              <p className="text-gray-300 text-sm">
                Estudos avançados com UFED e XRY para extração e gestão de laudos
                em cloud na Polícia Civil de Minas Gerais.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                Desenvolvimento do site InvestigacaoForense.com (2020–2025)
              </h3>
              <p className="text-gray-300 text-sm">
                Criação do site em WordPress e posterior migração para HTML/CSS
                estático, aprovado no Google Adsense e otimizado em SEO.
              </p>
                          </div>
                          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                Análise de Relatórios com Machine Learning
              </h3>
              <p className="text-gray-300 text-sm">
                Aplicação local em Python com bibliotecas de ML para interpretação
                avançada e extração de insights em relatórios de interceptação telefônica
                da PCMG, utilizando NLP e análise de padrões.
              </p>
            </div>
          <p className="text-center text-gray-400 italic mt-12">
            Algumas dessas aplicações podem ser demonstradas ou testadas mediante
            solicitação aos profissionais.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Entre em contato para discutir seu projeto
          </p>
          <a 
            href="/contato" 
            className="inline-block px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Entrar em Contato
          </a>
        </div>
      </section>
    </main>
  );
}
