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
            Sistema web desenvolvido como MVP de um SaaS destinado à gestão de laudos e documentos técnicos.
            Inclui autenticação por credenciais controladas (email e senha), upload seguro de arquivos e integração 
            direta com o <span className="font-semibold">banco de dados Supabase</span> para armazenamento estruturado.
            Cada documento possui <span className="font-semibold">hash SHA-256</span> calculado automaticamente
            para garantir integridade e rastreabilidade. O sistema inclui ainda:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2 mb-6">
            <li>Dashboard analítico com métricas de evolução e volume documental</li>
            <li>Logs completos de auditoria e trilhas de acesso</li>
            <li>Busca textual avançada sem a necessidade de abrir os arquivos</li>
            <li>Arquitetura pronta para expansão como SaaS multiusuário</li>
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-blue-800">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-gray-300">Stack:</span> Next.js, Supabase PostgreSQL, SHA-256
            </div>
            <button
              disabled
              className="bg-gray-700 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
              title="A aplicação ainda não está disponível publicamente"
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
            Ferramenta criada para análise técnico-forense de arquivos e links. O sistema processa o conteúdo
            enviado e fornece informações estruturadas, incluindo metadados, verificação de integridade,
            possíveis indícios de manipulação por ferramentas de IA e dados de geolocalização quando
            disponíveis. Recursos planejados incluem:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2 mb-6">
            <li>Leitura precisa de metadados (EXIF, MIME, timestamps)</li>
            <li>Detecção de edição ou processamento por inteligência artificial</li>
            <li>Extração de origem geográfica se incorporada ao arquivo</li>
            <li>Painel técnico consolidado com indicadores e validações</li>
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-blue-800">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-gray-300">Stack:</span> Python, ExifTool, ML Models
            </div>
            <button
              disabled
              className="bg-gray-700 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
              title="A aplicação ainda não está disponível publicamente"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Em Breve
            </button>
          </div>
        </div>
      </div>

      {/* SEÇÃO FINAL */}
      <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-slate-900/30 border border-blue-800/50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Solicitar Acesso ou Demonstração
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Caso tenha interesse em explorar as funcionalidades, avaliar os MVPs ou discutir adaptações
          específicas para sua instituição, entre em contato.
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
