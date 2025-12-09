'use client';

import Link from 'next/link';

export default function DesafiosEticosPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Voltar para Notícias
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <span className="text-xs font-semibold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
              Ética
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Desafios Éticos na Perícia Criminal: Equilibrando Justiça e Privacidade
          </h1>

          <div className="flex items-center justify-between gap-4 text-sm text-gray-600 mb-8 border-b pb-4">
            <span>Tales Vieira</span>
            <span>•</span>
            <span>outubro 1, 2024</span>
          </div>

          {/* Content */}
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Introdução</h2>
            <p className="mb-4">
              A perícia criminal desempenha um papel crucial na aplicação da justiça, fornecendo evidências científicas que podem determinar a culpa ou a inocente de um suspeito. No entanto, com o avanço das tecnologias e a crescente quantidade de dados disponíveis, surgem novos desafios éticos que precisam ser enfrentados. Este artigo explora alguns dos principais dilemas éticos na perícia criminal, incluindo a privacidade dos dados, o uso de tecnologias invasivas, a imparcialidade dos peritos e a necessidade de transparência e responsabilidade.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">A Importância da Ética na Perícia Criminal</h2>
            <p className="mb-4">
              A ética na perícia criminal é fundamental para garantir que as investigações sejam conduzidas de maneira justa e imparcial. Os peritos criminais lidam com informações sensíveis e têm o poder de influenciar significativamente o resultado de um caso. Portanto, é essencial que eles sigam princípios éticos rigorosos para proteger os direitos dos indivíduos e manter a integridade do sistema de justiça.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Privacidade dos Dados</h2>
            <p className="mb-4">
              Um dos maiores desafios éticos na perícia criminal é a privacidade dos dados. Com a crescente digitalização, os peritos têm acesso a uma quantidade sem precedentes de informações pessoais, incluindo dados de dispositivos móveis, registros de redes sociais e históricos de navegação na internet. A coleta e o armazenamento desses dados levantam questões sobre até que ponto a privacidade dos indivíduos deve ser protegida.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Impacto da LGPD na Perícia Criminal</h3>
            <p className="mb-4">
              A Lei Geral de Proteção de Dados (LGPD), sancionada em 2018 e em vigor desde 2020, estabelece diretrizes rigorosas sobre como dados pessoais devem ser coletados, armazenados e tratados no Brasil. A LGPD tem um impacto significativo na perícia criminal, pois impõe obrigações legais que os peritos devem seguir para garantir a proteção dos dados pessoais durante as investigações.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Uso de Tecnologias Invasivas</h2>
            <p className="mb-4">
              O uso de tecnologias invasivas, como vigilância por câmeras, escutas telefônicas e softwares de monitoramento, também apresenta desafios éticos significativos. Embora essas ferramentas possam ser extremamente úteis para coletar evidências, elas também podem ser vistas como uma invasão à privacidade dos indivíduos.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Vigilância e Monitoramento</h3>
            <p className="mb-4">
              O uso de câmeras de vigilância em locais públicos pode ajudar a prevenir crimes e identificar suspeitos, mas também pode levar a uma sensação de constante monitoramento e perda de privacidade. Da mesma forma, a interceptação de comunicações privadas, como e-mails e mensagens de texto, pode fornecer informações valiosas para uma investigação, mas também pode ser considerada uma violação dos direitos individuais.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Imparcialidade e Integridade dos Peritos</h2>
            <p className="mb-4">
              A imparcialidade e a integridade dos peritos criminais são essenciais para garantir que as investigações sejam conduzidas de maneira justa. No entanto, os peritos podem enfrentar pressões externas que podem comprometer sua objetividade. Conflitos de interesse, como relações pessoais ou financeiras com as partes envolvidas no caso, podem influenciar a interpretação das evidências.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Transparência e Responsabilidade</h2>
            <p className="mb-4">
              A transparência e a responsabilidade são pilares fundamentais da ética na perícia criminal. Os peritos devem ser transparentes sobre os métodos e técnicas que utilizam, bem como sobre as limitações e incertezas associadas às suas conclusões. Isso é especialmente importante em casos de alto perfil, onde a confiança do público no sistema de justiça pode estar em jogo.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Conclusão</h2>
            <p className="mb-4">
              Os desafios éticos na perícia criminal são complexos e multifacetados, exigindo um equilíbrio cuidadoso entre a necessidade de coletar evidências e a proteção dos direitos individuais. A privacidade dos dados, o uso de tecnologias invasivas, a imparcialidade dos peritos e a transparência são questões críticas que precisam ser abordadas para garantir a integridade do sistema de justiça.
            </p>
            <p className="mb-4 font-semibold">
              É fundamental que países como o Brasil invistam em políticas públicas que incentivem o desenvolvimento tecnológico e a formação ética dos peritos criminais, fortalecendo suas capacidades investigativas e mantendo o compromisso com a justiça e a ética.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Compartilhe este artigo:</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
