import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://www.investigacaoforense.com/servicos';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export const metadata: Metadata = {
  title: 'ServiÃ§os e Modelos de Entrega | InvestigaÃ§Ã£o Forense',
  description:
    'Entenda como trabalhamos: projeto fechado, squad sob demanda, evoluÃ§Ã£o contÃ­nua e consultoria tÃ©cnica para operaÃ§Ãµes crÃ­ticas.',
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
    title: 'ServiÃ§os e Modelos de Entrega | InvestigaÃ§Ã£o Forense',
    description:
      'Veja como contratamos e executamos projetos: escopo, governanÃ§a, rastreabilidade e modelos de entrega.',
    siteName: 'InvestigaÃ§Ã£o Forense',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'ServiÃ§os e modelos de entrega - InvestigaÃ§Ã£o Forense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServiÃ§os e Modelos de Entrega | InvestigaÃ§Ã£o Forense',
    description:
      'Entenda o modelo de contrataÃ§Ã£o e execuÃ§Ã£o para projetos de software em operaÃ§Ãµes crÃ­ticas.',
    images: [ogImage],
  },
};

const deliveryModels = [
  {
    name: 'Projeto fechado por escopo',
    when:
      'Ideal para demandas com objetivo claro, prazo definido e entregÃ¡veis bem delimitados.',
    includes: [
      'Levantamento tÃ©cnico e escopo formal',
      'Cronograma com marcos e critÃ©rios de aceite',
      'Entrega homologada e transferÃªncia de conhecimento',
    ],
  },
  {
    name: 'Squad especializado sob demanda',
    when:
      'Para organizaÃ§Ãµes que precisam acelerar backlog e manter cadÃªncia de evoluÃ§Ã£o tÃ©cnica.',
    includes: [
      'Apoio contÃ­nuo em produto, engenharia e dados',
      'Planejamento iterativo e priorizaÃ§Ã£o por impacto',
      'Ritmo de entrega com visibilidade executiva',
    ],
  },
  {
    name: 'EvoluÃ§Ã£o contÃ­nua de produto',
    when:
      'Quando a plataforma jÃ¡ existe e precisa ganhar robustez, seguranÃ§a e escala operacional.',
    includes: [
      'Roadmap evolutivo orientado a risco e valor',
      'Refino de arquitetura e integraÃ§Ãµes crÃ­ticas',
      'Melhoria contÃ­nua de performance e confiabilidade',
    ],
  },
  {
    name: 'Consultoria tÃ©cnica e compliance',
    when:
      'Para cenÃ¡rios com alta exigÃªncia de rastreabilidade, auditoria, perÃ­cia e governanÃ§a.',
    includes: [
      'DiagnÃ³stico tÃ©cnico de processos e sistemas',
      'RecomendaÃ§Ãµes priorizadas e plano de adequaÃ§Ã£o',
      'Suporte em validaÃ§Ã£o tÃ©cnica e documentaÃ§Ã£o',
    ],
  },
];

const steps = [
  {
    title: '1. DiagnÃ³stico inicial',
    text: 'Mapeamos contexto, risco operacional, requisitos tÃ©cnicos e objetivo de negÃ³cio.',
  },
  {
    title: '2. EstratÃ©gia de execuÃ§Ã£o',
    text: 'Definimos modelo de entrega, escopo, governanÃ§a e indicadores de acompanhamento.',
  },
  {
    title: '3. Entrega com rastreabilidade',
    text: 'Executamos com documentaÃ§Ã£o tÃ©cnica, checkpoints e validaÃ§Ã£o objetiva dos resultados.',
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section className="px-4 md:px-8 py-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          ServiÃ§os e Modelos de Entrega
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          Esta pÃ¡gina explica como contratamos e executamos projetos. Para conhecer as aplicaÃ§Ãµes e
          soluÃ§Ãµes disponÃ­veis, acesse a pÃ¡gina de SoluÃ§Ãµes.
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

                <p className="text-white font-semibold mb-3">O que estÃ¡ incluÃ­do</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Precisa de orientaÃ§Ã£o inicial?</h2>
          <p className="text-white/90 mb-8">
            Se ainda estiver avaliando o melhor caminho, podemos indicar a combinaÃ§Ã£o entre aplicaÃ§Ã£o,
            serviÃ§o e modelo de entrega para o seu cenÃ¡rio.
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
              Ver SoluÃ§Ãµes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


