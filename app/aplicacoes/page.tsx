'use client';

export default function AplicacoesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 md:px-8 lg:px-12">        {/* SEÇÃO: TÍTULO E INTRODUÇÃO */}
      <div className="max-w-7xl mx-auto pb-16 pt-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ecossistema de Soluções</h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-3xl">
            Desenvolvemos tecnologias que unem Ciência de Dados, IA e Segurança Digital.
            Nossas plataformas variam de ferramentas de análise forense a sistemas de gestão inteligente,
            sempre com foco em compliance, automação e confiabilidade técnica.
          </p>

          <div className="bg-blue-950/40 border border-blue-800 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Nossa Abordagem Tecnológica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-900/50 p-2 rounded-lg text-blue-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                <div>
                  <h3 className="text-white font-semibold">Segurança e Compliance</h3>
                  <p className="text-gray-400 text-sm mt-1">Arquiteturas projetadas para proteção de dados sensíveis e conformidade legal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-900/50 p-2 rounded-lg text-blue-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                <div>
                  <h3 className="text-white font-semibold">Integridade e Validação</h3>
                  <p className="text-gray-400 text-sm mt-1">Hashing SHA-256 e logs imutáveis para garantir autenticidade da prova.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-900/50 p-2 rounded-lg text-blue-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                <div>
                  <h3 className="text-white font-semibold">Inteligência Artificial</h3>
                  <p className="text-gray-400 text-sm mt-1">Automação inteligente para detectar padrões complexos e otimizar rotinas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-900/50 p-2 rounded-lg text-blue-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
                <div>
                  <h3 className="text-white font-semibold">Transparência</h3>
                  <p className="text-gray-400 text-sm mt-1">Dashboards analíticos em tempo real para controle total e auditoria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LISTA DE APLICAÇÕES */}
        <div className="space-y-10">

          {/* CARD 1 — METASCOPE */}
          <div className="bg-blue-950 border border-blue-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 shadow">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                MetaScope Forensic
              </h2>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Plataforma avançada de perícia digital que une validação forense e análise de ameaças. O sistema verifica a integridade de arquivos, detecta deepfakes e identifica riscos em links ou prints, gerando laudos técnicos automáticos.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-2 mb-6">
              <li>Validação Forense: Metadados, hash SHA-256 e geolocalização</li>
              <li>IA & Deepfakes: Detecção de manipulação sintética em camadas</li>
              <li>Ameaças Digitais: Análise de phishing e OCR em prints suspeitos</li>
              <li>Relatórios Técnicos: Exportação de relatório técnico completo em PDF</li>
            </ul>
            <div className="flex items-center justify-between pt-4 border-t border-blue-700">
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">Stack:</span> IA & ML Models, OCR, SHA-256, PDF Report
              </div>
              <a href="/aplicacoes/metascope"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Ver análise forense de arquivos
              </a>
            </div>
          </div>

          {/* CARD 2 — CONDOHUB */}
          <div className="bg-blue-950 border border-blue-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 shadow">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                CondoHub
              </h2>
              <span className="inline-block bg-blue-800 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full border border-blue-600 whitespace-nowrap">
                MVP em Testes
              </span>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              O sistema definitivo para o controle inteligente de condomínios. O CondoHub centraliza a gestão condominial
              com funções premium que transformam a experiência de síndicos e moradores: avisos em tempo real, marketplace
              exclusivo, gestão de ocorrências e automações diversas. A plataforma inclui ainda agendamento simplificado
              de espaços, registro seguro de visitantes e um inédito sistema automático de infrações.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-2 mb-6">
              <li>Gestão completa de avisos, ocorrências e marketplace</li>
              <li>Automações residenciais e prediais integradas</li>
              <li>Agendamento de espaços comuns e controle de portaria</li>
              <li>Sistema automático e auditável de registro de infrações</li>
            </ul>
            <div className="flex items-center justify-between pt-4 border-t border-blue-700">
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">Stack:</span> Next.js, Automação, Real-time
              </div>
              <a href="/aplicacoes/condohub"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                🚀 Acesse aqui
              </a>
            </div>
          </div>

          {/* CARD 3 — ECOFORENSICS */}
          <div className="bg-blue-950 border border-blue-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 shadow">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                EcoForensics Manager
              </h2>
              <span className="inline-block bg-blue-800 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full border border-blue-600 whitespace-nowrap">
                MVP em Testes
              </span>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Sistema web desenvolvido como MVP de um SaaS destinado à gestão de laudos e documentos técnicos.
              Inclui autenticação por credenciais controladas (email e senha), upload seguro de arquivos e
              integração direta com o <span className="font-semibold text-white">banco de dados Supabase</span> para
              armazenamento estruturado. Cada documento possui <span className="font-semibold text-white">hash SHA-256</span> calculado
              automaticamente para garantir integridade e rastreabilidade. O sistema inclui ainda:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-2 mb-6">
              <li>Dashboard analítico com métricas de evolução e volume documental</li>
              <li>Logs completos de auditoria e trilhas de acesso</li>
              <li>Busca textual avançada sem a necessidade de abrir os arquivos</li>
              <li>Arquitetura pronta para expansão como SaaS multiusuário</li>
            </ul>
            <div className="flex items-center justify-between pt-4 border-t border-blue-700">
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">Stack:</span> Next.js, Supabase PostgreSQL, SHA-256
              </div>
              <button
                disabled
                className="bg-gray-700 text-gray-300 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Em Breve
              </button>
            </div>
          </div>
        </div>


        {/* SEÇÃO: SOLUÇÕES CORPORATIVAS & DADOS (Incorporado de /plataforma-dados-criticos) */}
        <div className="mb-20 pt-24 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Soluções Corporativas & Dados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="text-blue-400 mb-3 text-3xl">📁</div>
              <h3 className="text-xl font-bold text-white mb-2">Gestão de Documentos</h3>
              <p className="text-gray-300 text-sm">Controle de versão, histórico de alterações e repositório seguro para arquivos críticos.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="text-blue-400 mb-3 text-3xl">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">Auditoria & Compliance</h3>
              <p className="text-gray-300 text-sm">Rastreabilidade total com logs de acesso e trilhas de auditoria para fins regulatórios.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="text-blue-400 mb-3 text-3xl">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">BI & Analytics</h3>
              <p className="text-gray-300 text-sm">Dashboards interativos para transformar dados complexos em inteligência acionável.</p>
            </div>
          </div>
        </div>

        {/* SEÇÃO: SETORES ATENDIDOS (Incorporado de /solucoes) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Setores Atendidos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['⚖️ Jurídico', '🔍 Investigação', '👮 Segurança Pública', '🏢 Corporativo', '🌾 Agronegócio', '🏛️ Setor Público'].map((setor) => (
              <span key={setor} className="bg-gray-800 text-gray-200 px-6 py-3 rounded-full border border-gray-700 font-semibold hover:bg-gray-700 hover:text-white transition-colors cursor-default">
                {setor}
              </span>
            ))}
          </div>
        </div>

        {/* SEÇÃO FINAL CTA */}
        <div className="mt-16 mb-16 bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-700 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
            <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Solicitar Acesso ou Demonstração
          </h2>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
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
        <div className="h-16"></div>
      </div>
    </div>
  );
}
