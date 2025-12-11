'use client';

export default function AplicacoesPage() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">

      {/* TITULO E TEXTO GERAL */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Aplicacoes e MVPs</h1>

        <p className="text-lg text-gray-400 mb-8">
          Nesta pagina apresentamos prototipos funcionais (MVPs) desenvolvidos para avaliacao tecnica,
          testes exploratorios e demonstracoes sob demanda. Cada aplicacao aqui listada representa a
          base de uma solucao SaaS completa que esta em evolucao. Nosso objetivo e transformar esses
          prototipos em plataformas robustas com autenticacao, escalabilidade, integracao segura de dados
          e pipelines avancados de analise.
        </p>

        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Sobre os MVPs</h2>
          <p className="text-gray-300 mb-4">
            As aplicacoes em desenvolvimento utilizam tecnologias modernas para oferecer recursos como:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Gestao e processamento de documentos com validacao criptografica</li>
            <li>Armazenamento em nuvem com bancos de dados distribuidos</li>
            <li>Dashboards interativos baseados em metricas reais</li>
            <li>Mecanismos de auditoria e trilhas de acesso</li>
            <li>Integracoes com machine learning e analise automatizada</li>
          </ul>
        </div>
      </div>

      {/* LISTA DE APLICACOES */}
      <div className="space-y-10">

        {/* CARD 1 — ECOFORENSICS */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-8 hover:border-blue-600 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              EcoForensics Manager
            </h2>
            <span className="inline-block bg-blue-900/40 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full border border-blue-700 whitespace-nowrap">
              MVP em Testes
            </span>
          </div>

          <p className="text-gray-300 mb-6">
            Sistema web desenvolvido como MVP de um SaaS destinado a gestao de laudos e documentos tecnicos.
            Inclui autenticacao por credenciais controladas (email e senha), upload seguro de arquivos e integracao 
            direta com o <span className="font-semibold">banco de dados Supabase</span> para armazenamento estruturado.
            Cada documento possui <span className="font-semibold">hash SHA-256</span> calculado automaticamente
            para garantir integridade e rastreabilidade. O sistema inclui ainda:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2 mb-6">
            <li>Dashboard analtico com metricas de evolucao e volume documental</li>
            <li>Logs completos de auditoria e trilhas de acesso</li>
            <li>Busca textual avancada sem a necessidade de abrir os arquivos</li>
            <li>Arquitetura pronta para expansao como SaaS multiusuario</li>
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-blue-800">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-gray-300">Stack:</span> Next.js, Supabase PostgreSQL, SHA-256
            </div>
            <button
              disabled
              className="bg-gray-700 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
              title="A aplicacao ainda nao esta disponivel publicamente"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Em Breve
            </button>
          </div>
        </div>

        {/* CARD 2 — METASCOPE */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-8 hover:border-blue-600 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              MetaScope Forensic
            </h2>
            <span className="inline-block bg-blue-900/40 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full border border-blue-700 whitespace-nowrap">
              MVP em Testes
            </span>
          </div>

          <p className="text-gray-300 mb-6">
            Ferramenta criada para analise tecnico-forense de arquivos e links. O sistema processa o conteudo
            enviado e fornece informacoes estruturadas, incluindo metadados, verificacao de integridade,
            possiveis indicios de manipulacao por ferramentas de IA e dados de geolocalizacao quando
            disponiveis. Recursos planejados incluem:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2 mb-6">
            <li>Leitura precisa de metadados (EXIF, MIME, timestamps)</li>
            <li>Deteccao de edicao ou processamento por inteligencia artificial</li>
            <li>Extracao de origem geografica se incorporada ao arquivo</li>
            <li>Painel tecnico consolidado com indicadores e validacoes</li>
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-blue-800">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-gray-300">Stack:</span> Python, ExifTool, ML Models
            </div>
            <button
              disabled
              className="bg-gray-700 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
              title="A aplicacao ainda nao esta disponivel publicamente"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Em Breve
            </button>
          </div>
        </div>
      </div>

      {/* SECAO FINAL */}
      <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-slate-900/30 border border-blue-800/50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Solicitar Acesso ou Demonstracao
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Caso tenha interesse em explorar as funcionalidades, avaliar os MVPs ou discutir adaptacoes
          especificas para sua instituicao, entre em contato.
        </p>

        <a
          href="/contato"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}      
