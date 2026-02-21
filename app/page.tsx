import type { Metadata } from 'next';

const homeUrl = 'https://www.investigacaoforense.com/';
const homeOgImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export const metadata: Metadata = {
  title: 'PerÃ­cia Digital e AnÃ¡lise Forense Digital | InvestigaÃ§Ã£o Forense',
  description:
    'Software de perÃ­cia digital, anÃ¡lise forense digital e operaÃ§Ãµes crÃ­ticas com auditoria, rastreabilidade, integridade e compliance.',
  alternates: {
    canonical: homeUrl,
    languages: {
      'pt-BR': homeUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: homeUrl,
    title: 'PerÃ­cia Digital e AnÃ¡lise Forense Digital | InvestigaÃ§Ã£o Forense',
    description:
      'SoluÃ§Ãµes de software para perÃ­cia digital, anÃ¡lise forense de arquivos e operaÃ§Ãµes de alto impacto.',
    siteName: 'InvestigaÃ§Ã£o Forense',
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: 'InvestigaÃ§Ã£o Forense - software para dados crÃ­ticos e perÃ­cia digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerÃ­cia Digital e AnÃ¡lise Forense Digital | InvestigaÃ§Ã£o Forense',
    description: 'Software para perÃ­cia digital, anÃ¡lise forense digital e operaÃ§Ãµes reguladas.',
    images: [homeOgImage],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'InvestigaÃ§Ã£o Forense',
  url: homeUrl,
  inLanguage: 'pt-BR',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InvestigaÃ§Ã£o Forense',
  url: homeUrl,
  logo: 'https://www.investigacaoforense.com/favicon.ico',
  sameAs: [
    'https://www.linkedin.com/in/peritotales/',
    'https://www.linkedin.com/in/matheusvieira-dev/',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="relative overflow-hidden w-full min-h-[68vh] md:min-h-[74vh] bg-gradient-to-b from-slate-100 via-blue-50 to-cyan-50 border-b border-slate-200">
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute top-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 h-64 w-[46rem] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative h-full min-h-[68vh] md:min-h-[74vh] flex flex-col items-center justify-center px-4 text-center text-slate-900">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 leading-[1.08] tracking-[-0.02em] max-w-[22ch]">
            Software para PerÃ­cia Digital e OperaÃ§Ãµes CrÃ­ticas
          </h1>
          <p className="text-lg sm:text-xl md:text-[1.95rem] mb-10 md:mb-12 max-w-[42ch] text-slate-700 leading-[1.4]">
            Desenvolvemos soluÃ§Ãµes de anÃ¡lise forense digital, perÃ­cia digital e automaÃ§Ã£o para organizaÃ§Ãµes que operam com dados sensÃ­veis e processos regulados.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg font-semibold text-lg tracking-[-0.01em] text-white shadow-sm hover:shadow-md"
            >
              Ver casos e projetos
            </a>
            <a
              href="/aplicacoes"
              className="px-8 py-4 border-2 border-blue-600 text-blue-700 bg-white/70 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg font-semibold text-lg tracking-[-0.01em] shadow-sm hover:shadow-md"
            >
              Explorar aplicaÃ§Ãµes de perÃ­cia digital
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-700 leading-[1.75] mb-8 max-w-[56ch] mx-auto">
            Somos uma empresa de tecnologia especializada no desenvolvimento de software, plataformas de dados e sistemas para ambientes que exigem controle, auditoria e rastreabilidade. Atuamos com SaaS, BI, automaÃ§Ãµes e integraÃ§Ãµes para setores regulados e de alta responsabilidade.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-[1.75] mb-8 max-w-[58ch] mx-auto">
            Da anÃ¡lise forense de arquivos Ã  governanÃ§a de dados crÃ­ticos, projetamos soluÃ§Ãµes para reduzir risco operacional e aumentar seguranÃ§a decisÃ³ria.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/plataforma-dados-criticos" className="text-slate-800 hover:text-blue-700 font-bold text-lg transition-colors">
              â†’ ConheÃ§a nossa Plataforma de Dados
            </a>
            <a href="/aplicacoes" className="text-slate-800 hover:text-blue-700 font-bold text-lg transition-colors">
              â†’ Veja nossas SoluÃ§Ãµes
            </a>
            <a href="/aplicacoes/metascope" className="text-slate-800 hover:text-blue-700 font-bold text-lg transition-colors">
              â†’ ConheÃ§a a aplicaÃ§Ã£o de perÃ­cia digital
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-[-0.015em] text-center text-slate-900 mb-16">Como Trabalhamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-4">Desenvolvimento Completo</h3>
              <p className="text-slate-600">SaaS, sistemas personalizados, dashboards analÃ­ticos, automaÃ§Ãµes e aplicaÃ§Ãµes integradas.</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-4">Foco em Resultados</h3>
              <p className="text-slate-600">Performance, seguranÃ§a e resultados mensurÃ¡veis em cada soluÃ§Ã£o entregue.</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-4">ExperiÃªncia SÃ³lida</h3>
              <p className="text-slate-600">Mais de 20 anos em seguranÃ§a pÃºblica, gestÃ£o e anÃ¡lise operacional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-[-0.015em] text-center text-slate-900 mb-4">Setores Atendidos</h2>
          <p className="text-center text-slate-600 text-lg leading-[1.7] max-w-[58ch] mx-auto mb-14">
            Atuamos em segmentos que operam com dados crÃ­ticos, exigÃªncia regulatÃ³ria e alto nÃ­vel de responsabilidade tÃ©cnica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['JurÃ­dico', 'Fluxo de provas digitais, organizaÃ§Ã£o documental e auditoria para suporte tÃ©cnico-processual.', 'Cadeia de CustÃ³dia'],
              ['SeguranÃ§a PÃºblica', 'Sistemas para gestÃ£o pericial, vestÃ­gios e inteligÃªncia operacional com rastreabilidade.', 'EvidÃªncia Digital'],
              ['Corporativo', 'Controle de processos crÃ­ticos, governanÃ§a de dados e trilhas de auditoria para compliance.', 'GovernanÃ§a'],
              ['CondomÃ­nios', 'OperaÃ§Ã£o condominial com registros auditÃ¡veis, documentos Ã­ntegros e rotinas automatizadas.', 'OperaÃ§Ã£o'],
              ['AgronegÃ³cio', 'Monitoramento de operaÃ§Ãµes e documentaÃ§Ã£o tÃ©cnica para decisÃµes rÃ¡pidas e confiÃ¡veis.', 'Dados CrÃ­ticos'],
              ['Meio Ambiente', 'GestÃ£o de evidÃªncias, laudos e ocorrÃªncias para fiscalizaÃ§Ã£o e conformidade regulatÃ³ria.', 'Conformidade'],
            ].map(([title, desc, tag]) => (
              <div key={title} className="p-6 bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl shadow-sm h-full flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 mb-6">{desc}</p>
                <span className="inline-block mt-auto text-xs px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 font-semibold">{tag}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <a href="/contato" className="text-blue-700 hover:text-blue-800 font-semibold transition-colors">
              Seu setor nÃ£o estÃ¡ aqui? Fale com um especialista â†’
            </a>
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 border-l-4 border-blue-600 bg-white rounded-xl shadow-sm">
            <p className="text-xl text-slate-700 leading-relaxed text-center">
              Acreditamos em soluÃ§Ãµes feitas para resolver problemas reais. Por isso, cada projeto Ã© pensado de ponta a ponta: arquitetura, experiÃªncia do usuÃ¡rio, seguranÃ§a, escalabilidade e impacto direto no seu dia a dia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-[-0.015em] text-center text-slate-900 mb-4">
            ServiÃ§os e SoluÃ§Ãµes para OperaÃ§Ãµes CrÃ­ticas
          </h2>
          <p className="text-center text-slate-600 text-lg leading-[1.7] max-w-[58ch] mx-auto mb-14">
            Projetamos e evoluÃ­mos software para operaÃ§Ãµes crÃ­ticas, com rastreabilidade, auditoria e seguranÃ§a para decisÃµes de alto impacto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col p-8 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-8">ServiÃ§os Principais</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">Desenvolvimento de Sistemas e AplicaÃ§Ãµes Sob Medida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">Plataformas SaaS para Dados e Documentos CrÃ­ticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">AutomaÃ§Ã£o de Fluxos, Auditoria e Rastreabilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">IntegraÃ§Ãµes e ModernizaÃ§Ã£o de Processos Legados</span>
                </li>
              </ul>
              <a href="/servicos" className="px-6 py-3 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold rounded-lg text-center">
                Ver ServiÃ§os e Modelos de Entrega
              </a>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-8">Modelos de Entrega</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">Projeto Fechado por Escopo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">Squad Especializado sob Demanda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">EvoluÃ§Ã£o ContÃ­nua de Produto (Roadmap)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">â€¢</span>
                  <span className="text-slate-800">Consultoria TÃ©cnica para Arquitetura e Compliance</span>
                </li>
              </ul>
              <a href="/contato" className="px-6 py-3 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold rounded-lg text-center">
                Falar com um Especialista
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Atendimento para setor pÃºblico e privado â€¢ DemonstraÃ§Ã£o sob solicitaÃ§Ã£o
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.02em] text-white mb-6">Pronto para transformar sua operaÃ§Ã£o?</h2>
          <p className="text-xl leading-[1.55] text-blue-50 mb-12 max-w-[38ch] mx-auto">
            ConheÃ§a nossas soluÃ§Ãµes e veja como podemos apoiar sua operaÃ§Ã£o com tecnologia e rastreabilidade.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/portfolio" className="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 font-semibold rounded-lg text-lg shadow-sm">
              Ver portfÃ³lio completo
            </a>
            <a href="/contato" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-300 rounded-lg font-semibold text-lg">
              Falar com especialista
            </a>
          </div>
        </div>
      </section>
    </>
  );
}



