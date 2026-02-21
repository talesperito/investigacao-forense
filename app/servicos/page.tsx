import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://www.investigacaoforense.com/servicos';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export const metadata: Metadata = {
  title: 'Serviços e Modelos de Entrega | Investigação Forense',
  description:
    'Entenda como trabalhamos: projeto fechado, squad sob demanda, evolução contínua e consultoria técnica para operações críticas.',
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
    title: 'Serviços e Modelos de Entrega | Investigação Forense',
    description:
      'Veja como contratamos e executamos projetos: escopo, governança, rastreabilidade e modelos de entrega.',
    siteName: 'Investigação Forense',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Serviços e modelos de entrega - Investigação Forense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços e Modelos de Entrega | Investigação Forense',
    description:
      'Entenda o modelo de contratação e execução para projetos de software em operações críticas.',
    images: [ogImage],
  },
};

const deliveryModels = [
  {
    name: 'Projeto fechado por escopo',
    when:
      'Ideal para demandas com objetivo claro, prazo definido e entregáveis bem delimitados.',
    includes: [
      'Levantamento técnico e escopo formal',
      'Cronograma com marcos e critérios de aceite',
      'Entrega homologada e transferência de conhecimento',
    ],
  },
  {
    name: 'Squad especializado sob demanda',
    when:
      'Para organizações que precisam acelerar backlog e manter cadência de evolução técnica.',
    includes: [
      'Apoio contínuo em produto, engenharia e dados',
      'Planejamento iterativo e priorização por impacto',
      'Ritmo de entrega com visibilidade executiva',
    ],
  },
  {
    name: 'Evolução contínua de produto',
    when:
      'Quando a plataforma já existe e precisa ganhar robustez, segurança e escala operacional.',
    includes: [
      'Roadmap evolutivo orientado a risco e valor',
      'Refino de arquitetura e integrações críticas',
      'Melhoria contínua de performance e confiabilidade',
    ],
  },
  {
    name: 'Consultoria técnica e compliance',
    when:
      'Para cenários com alta exigência de rastreabilidade, auditoria, perícia e governança.',
    includes: [
      'Diagnóstico técnico de processos e sistemas',
      'Recomendações priorizadas e plano de adequação',
      'Suporte em validação técnica e documentação',
    ],
  },
];

const steps = [
  {
    title: '1. Diagnóstico inicial',
    text: 'Mapeamos contexto, risco operacional, requisitos técnicos e objetivo de negócio.',
  },
  {
    title: '2. Estratégia de execução',
    text: 'Definimos modelo de entrega, escopo, governança e indicadores de acompanhamento.',
  },
  {
    title: '3. Entrega com rastreabilidade',
    text: 'Executamos com documentação técnica, checkpoints e validação objetiva dos resultados.',
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section className="px-4 md:px-8 py-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Serviços e Modelos de Entrega
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          Esta página explica como contratamos e executamos projetos. Para conhecer as aplicações e
          soluções disponíveis, acesse a página de Soluções.
        </p>
      </section>

      <section className="px-4 md:px-8 py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
              <h2 className="text-xl font-bold text-white mb-3">{step.title}</h2>
              <p className="text-gray-300 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Escolha o modelo de entrega mais aderente
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryModels.map((model) => (
              <article
                key={model.name}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-lg flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{model.name}</h3>
                <p className="text-blue-300 font-semibold mb-4">Quando usar</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{model.when}</p>

                <p className="text-white font-semibold mb-3">O que está incluído</p>
                <ul className="space-y-2 mb-8">
                  {model.includes.map((item) => (
                    <li key={item} className="text-gray-300">
                      - {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contato"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mt-auto"
                >
                  Conversar sobre este modelo
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-4xl mx-auto rounded-xl border border-blue-700 bg-gradient-to-r from-blue-950 to-blue-900 p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Precisa de orientação inicial?</h2>
          <p className="text-white/90 mb-8">
            Se ainda estiver avaliando o melhor caminho, podemos indicar a combinação entre aplicação,
            serviço e modelo de entrega para o seu cenário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-bold transition-colors duration-200 inline-block"
            >
              Falar com Especialista
            </Link>
            <Link
              href="/aplicacoes"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-bold transition-all duration-200 inline-block"
            >
              Ver Soluções
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

