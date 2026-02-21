import type { Metadata } from 'next';

const pageUrl = 'https://www.investigacaoforense.com/aplicacoes';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export const metadata: Metadata = {
  title: 'Soluções e Aplicações para Operações Críticas | Investigação Forense',
  description:
    'Conheça nossas soluções e aplicações para perícia digital, compliance e operações reguladas. Veja cada aplicação e acesse a página detalhada.',
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
    title: 'Soluções e Aplicações para Operações Críticas | Investigação Forense',
    description:
      'Página de soluções para perícia digital, análise forense e operações críticas com acesso às aplicações detalhadas.',
    siteName: 'Investigação Forense',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Soluções e aplicações - Investigação Forense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluções e Aplicações para Operações Críticas | Investigação Forense',
    description:
      'Escolha a solução mais aderente ao seu cenário e acesse a página detalhada de cada aplicação.',
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
      'Perícia digital para validação de autenticidade e integridade de arquivos, com análise de ameaças em links e prints suspeitos.',
    bullets: [
      'Metadados técnicos, hash SHA-256 e relatório em PDF',
      'Detecção de indícios de IA e possível manipulação',
      'Análise de phishing, homografia e OCR em prints',
    ],
    href: '/aplicacoes/metascope',
    cta: 'Ver página completa do MetaScope',
  },
  {
    name: 'CondoHub',
    stage: 'MVP em testes',
    summary:
      'Plataforma para operação condominial com registros auditáveis, comunicação em tempo real e processos estruturados.',
    bullets: [
      'Ocorrências, comunicados e reservas centralizados',
      'Trilhas de governança e histórico operacional',
      'Fluxos com foco em controle e conformidade',
    ],
    href: '/aplicacoes/condohub',
    cta: 'Ver página do CondoHub',
  },
  {
    name: 'EcoForensics Manager',
    stage: 'MVP em evolução',
    summary:
      'Projeto focado em gestão de documentos técnicos e rastreabilidade de dados para ambientes de alta responsabilidade.',
    bullets: [
      'Repositório documental com integridade por hash',
      'Auditoria e rastreabilidade de alterações',
      'Arquitetura orientada a compliance',
    ],
    href: '/contato',
    cta: 'Solicitar demonstração',
  },
];

export default function AplicacoesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto pt-12 pb-20">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções e Aplicações para Operações Críticas
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed max-w-4xl">
            Esta página funciona como ponte entre o portfólio e as páginas específicas de cada aplicação.
            Aqui você identifica a opção mais aderente ao seu contexto e avança para a análise detalhada.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-blue-800 bg-blue-950/40 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Como navegar nesta página</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">1. Entenda o problema</p>
              <p>Leia o resumo de cada solução para encontrar o caso de uso mais próximo da sua operação.</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">2. Avalie o estágio</p>
              <p>Verifique se a aplicação está em produção, piloto ou fase de evolução.</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">3. Acesse a página detalhada</p>
              <p>Use o CTA para analisar funcionalidades, limites técnicos e modelo de acesso.</p>
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
                  Estágio: {app.stage}
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
          <h2 className="text-2xl font-bold text-white mb-3">Não sabe qual caminho seguir?</h2>
          <p className="text-gray-300 mb-6 max-w-3xl">
            Se você quer ver histórico técnico, casos e credenciais, comece pelo Portfólio.
            Se já tem uma necessidade específica, fale com a equipe para indicar a aplicação mais adequada ao seu cenário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/portfolio"
              className="inline-flex justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Ir para Portfólio
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



