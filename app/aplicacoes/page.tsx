'use client';

export default function AplicacoesPage() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">

      {/* TÍTULO E TEXTO GERAL */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Aplicações e MVPs</h1>

        <p className="text-lg text-gray-400 mb-8">
          Nesta página apresentamos protótipos funcionais (MVPs) desenvolvidos para avaliação técnica,
          testes exploratórios e demonstrações sob demanda. Cada aplicação aqui listada representa a
          base de uma solução SaaS completa que está em evolução. Nosso objetivo é transformar esses
          protótipos em plataformas robustas com autenticação, escalabilidade, integração segura de dados
          e pipelines avançados de análise.
        </p>

        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Sobre os MVPs</h2>
          <p className="text-gray-300 mb-4">
            As aplicações em desenvolvimento utilizam tecnologias modernas para oferecer recursos como:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Gestão e processamento de documentos com validação criptográfica</li>
            <li>Armazenamento em nuvem com bancos de dados distribuídos</li>
            <li>Dashboards interativos baseados em métricas reais</li>
            <li>Mecanismos de auditoria e trilhas de acesso</li>
            <li>Integrações com machine learning e análise automatizada</li>
          </ul>
        </div>
      </div>

      {/* LISTA DE APLICAÇÕES */}
      <div className="space-y-10">

        {/* CARD 1 — ECOFORENSICS */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">EcoForensics Manager</h2>
          <p className="text-gray-300 mb-6">
            Sistema web desenvolvido como MVP de um SaaS destinado à gestão de laudos e documentos técnicos.
            Inclui autenticação inicial, upload seguro de arquivos e integração direta com o
            <span className="font-semibold"> banco de dados Supabase</span> para armazenamento estruturado.
            Cada documento possui <span className="font-semibold">hash SHA-256</span> calculado automaticamente
            para garantir integridade e rastreabilidade. O sistema inclui ainda:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Dashboard analítico com métricas de evolução e volume documental</li>
            <li>Logs completos de auditoria e trilhas de acesso</li>
            <li>Busca textual avançada sem a necessidade de abrir os arquivos</li>
            <li>Arquitetura pronta para expansão como SaaS multiusuário</li>
          </ul>

          <div className="mt-6">
            <button
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg opacity-40 cursor-not-allowed"
              title="A aplicação ainda não está disponível publicamente"
            >
              Visualizar Aplicação (em desenvolvimento)
            </button>
          </div>
        </div>

        {/* CARD 2 — METASCOPE */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">MetaScope Forensic</h2>
          <p className="text-gray-300 mb-6">
            Ferramenta criada para análise técnico-forense de arquivos e links. O sistema processa o conteúdo
            enviado e fornece informações estruturadas, incluindo metadados, verificação de integridade,
            possíveis indícios de manipulação por ferramentas de IA e dados de geolocalização quando
            disponíveis. Recursos planejados incluem:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Leitura precisa de metadados (EXIF, MIME, timestamps)</li>
            <li>Detecção de edição ou processamento por inteligência artificial</li>
            <li>Extração de origem geográfica se incorporada ao arquivo</li>
            <li>Painel técnico consolidado com indicadores e validações</li>
          </ul>

          <div className="mt-6">
            <button
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg opacity-40 cursor-not-allowed"
              title="A aplicação ainda não está disponível publicamente"
            >
              Visualizar Aplicação (em desenvolvimento)
            </button>
          </div>
        </div>
      </div>

      {/* SEÇÃO FINAL */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Solicitar Acesso ou Demonstração</h2>
        <p className="text-lg text-gray-400 mb-6">
          Caso tenha interesse em explorar as funcionalidades, avaliar os MVPs ou discutir adaptações
          específicas para sua instituição, entre em contato.
        </p>

        <a
          href="/contato"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}
