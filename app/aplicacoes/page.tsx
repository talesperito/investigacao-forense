import type { Metadata } from 'next';

const pageUrl = 'https://www.investigacaoforense.com/aplicacoes';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export const metadata: Metadata = {
  title: 'SoluÃ§Ãµes e AplicaÃ§Ãµes para OperaÃ§Ãµes CrÃ­ticas | InvestigaÃ§Ã£o Forense',
  description:
    'ConheÃ§a nossas soluÃ§Ãµes e aplicaÃ§Ãµes para perÃ­cia digital, compliance e operaÃ§Ãµes reguladas. Veja cada aplicaÃ§Ã£o e acesse a pÃ¡gina detalhada.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'pt-BR': pageUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: pageUrl,
    title: 'SoluÃ§Ãµes e AplicaÃ§Ãµes para OperaÃ§Ãµes CrÃ­ticas | InvestigaÃ§Ã£o Forense',
    description:
      'PÃ¡gina de soluÃ§Ãµes para perÃ­cia digital, anÃ¡lise forense e operaÃ§Ãµes crÃ­ticas com acesso Ã s aplicaÃ§Ãµes detalhadas.',
    siteName: 'InvestigaÃ§Ã£o Forense',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'SoluÃ§Ãµes e aplicaÃ§Ãµes - InvestigaÃ§Ã£o Forense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoluÃ§Ãµes e AplicaÃ§Ãµes para OperaÃ§Ãµes CrÃ­ticas | InvestigaÃ§Ã£o Forense',
    description:
      'Escolha a soluÃ§Ã£o mais aderente ao seu cenÃ¡rio e acesse a pÃ¡gina detalhada de cada aplicaÃ§Ã£o.',
    images: [ogImage],
  },
};

type AppCard = {
  name: string;
  stage: string;
  summary: string;
  bullets: string[];
  href: string;
  cta: string;
};

const applicationCards: AppCard[] = [
  {
    name: 'MetaScope Forensic',
    stage: 'Piloto com parceiros',
    summary:
      'PerÃ­cia digital para validaÃ§Ã£o de autenticidade e integridade de arquivos, com anÃ¡lise de ameaÃ§as em links e prints suspeitos.',
    bullets: [
      'Metadados tÃ©cnicos, hash SHA-256 e relatÃ³rio em PDF',
      'DetecÃ§Ã£o de indÃ­cios de IA e possÃ­vel manipulaÃ§Ã£o',
      'AnÃ¡lise de phishing, homografia e OCR em prints',
    ],
    href: '/aplicacoes/metascope',
    cta: 'Ver pÃ¡gina completa do MetaScope',
  },
  {
    name: 'CondoHub',
    stage: 'MVP em testes',
    summary:
      'Plataforma para operaÃ§Ã£o condominial com registros auditÃ¡veis, comunicaÃ§Ã£o em tempo real e processos estruturados.',
    bullets: [
      'OcorrÃªncias, comunicados e reservas centralizados',
      'Trilhas de governanÃ§a e histÃ³rico operacional',
      'Fluxos com foco em controle e conformidade',
    ],
    href: '/aplicacoes/condohub',
    cta: 'Ver pÃ¡gina do CondoHub',
  },
  {
    name: 'EcoForensics Manager',
    stage: 'MVP em evoluÃ§Ã£o',
    summary:
      'Projeto focado em gestÃ£o de documentos tÃ©cnicos e rastreabilidade de dados para ambientes de alta responsabilidade.',
    bullets: [
      'RepositÃ³rio documental com integridade por hash',
      'Auditoria e rastreabilidade de alteraÃ§Ãµes',
      'Arquitetura orientada a compliance',
    ],
    href: '/contato',
    cta: 'Solicitar demonstraÃ§Ã£o',
  },
];

export default function AplicacoesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto pt-12 pb-20">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SoluÃ§Ãµes e AplicaÃ§Ãµes para OperaÃ§Ãµes CrÃ­ticas
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed max-w-4xl">
            Esta pÃ¡gina funciona como ponte entre o portfÃ³lio e as pÃ¡ginas especÃ­ficas de cada aplicaÃ§Ã£o.
            Aqui vocÃª identifica a opÃ§Ã£o mais aderente ao seu contexto e avanÃ§a para a anÃ¡lise detalhada.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-blue-800 bg-blue-950/40 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Como navegar nesta pÃ¡gina</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">1. Entenda o problema</p>
              <p>Leia o resumo de cada soluÃ§Ã£o para encontrar o caso de uso mais prÃ³ximo da sua operaÃ§Ã£o.</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">2. Avalie o estÃ¡gio</p>
              <p>Verifique se a aplicaÃ§Ã£o estÃ¡ em produÃ§Ã£o, piloto ou fase de evoluÃ§Ã£o.</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">3. Acesse a pÃ¡gina detalhada</p>
              <p>Use o CTA para analisar funcionalidades, limites tÃ©cnicos e modelo de acesso.</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          {applicationCards.map((app) => (
            <article
              key={app.name}
              className="rounded-2xl border border-gray-700 bg-gray-900/55 p-7 md:p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{app.name}</h2>
                <span className="inline-flex w-fit rounded-full border border-blue-700 bg-blue-900/50 px-3 py-1 text-sm font-semibold text-blue-200">
                  EstÃ¡gio: {app.stage}
                </span>
              </div>

              <p className="text-gray-200 leading-relaxed mb-5">{app.summary}</p>

              <ul className="space-y-2 mb-6">
                {app.bullets.map((item) => (
                  <li key={item} className="text-gray-300">
                    - {item}
                  </li>
                ))}
              </ul>

              <a
                href={app.href}
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {app.cta}
              </a>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-gray-700 bg-gray-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-3">NÃ£o sabe qual caminho seguir?</h2>
          <p className="text-gray-300 mb-6 max-w-3xl">
            Se vocÃª quer ver histÃ³rico tÃ©cnico, casos e credenciais, comece pelo PortfÃ³lio.
            Se jÃ¡ tem uma necessidade especÃ­fica, fale com a equipe para indicar a aplicaÃ§Ã£o mais adequada ao seu cenÃ¡rio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/portfolio"
              className="inline-flex justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Ir para PortfÃ³lio
            </a>
            <a
              href="/contato"
              className="inline-flex justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Falar com Especialista
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}


