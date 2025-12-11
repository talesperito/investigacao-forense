'use client';

export default function AplicacoesPage() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Aplicações</h1>
        <p className="text-lg text-gray-400 mb-4 leading-relaxed">
          Apresentamos aqui nossos sistemas em fase de <span className="text-blue-400 font-semibold">Minimum Viable Product (MVP)</span>, 
          desenvolvidos para validação de conceitos e demonstração de funcionalidades core. Estas aplicações representam protótipos 
          funcionais que serão evoluídos para plataformas SaaS completas, incorporando arquiteturas escaláveis, microsserviços, 
          APIs robustas e integrações enterprise-grade.
        </p>
        <p className="text-base text-gray-400 leading-relaxed">
          Os MVPs disponibilizados permitem testes práticos de workflows e validação de casos de uso reais em ambientes controlados. 
          O acesso é disponibilizado mediante solicitação formal para clientes e parceiros interessados em avaliar as capacidades 
          técnicas e aplicabilidade das soluções.
        </p>
      </div>

      {/* EcoForensics Manager */}
      <div className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl hover:border-blue-600 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-blue-400">EcoForensics Manager</h2>
            <span className="inline-block bg-blue-900/40 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full border border-blue-700">
              MVP em Testes
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          Sistema de gestão documental forense com arquitetura serverless, autenticação OAuth 2.0 e armazenamento 
          em banco de dados PostgreSQL (Supabase). Oferece pipeline automatizado para processamento de laudos periciais 
          e documentos técnicos com integridade criptográfica garantida.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Integridade Criptográfica
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Cálculo automático de hash SHA-256</li>
              <li>• Validação de integridade em tempo real</li>
              <li>• Rastreamento de alterações documentais</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Busca Avançada
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Full-text search engine integrado</li>
              <li>• Indexação automática de conteúdo</li>
              <li>• Busca sem necessidade de download</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              Dashboard Analítico
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Visualizações interativas de dados</li>
              <li>• Métricas e KPIs em tempo real</li>
              <li>• Relatórios customizáveis</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Auditoria e Compliance
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Sistema de logs detalhados</li>
              <li>• Rastreamento de ações de usuários</li>
              <li>• Conformidade com normas forenses</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="text-sm text-gray-400">
            <span className="font-semibold text-gray-300">Stack:</span> Next.js, Supabase PostgreSQL, OAuth 2.0, SHA-256
          </div>
          <button 
            disabled
            className="bg-gray-700 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Em Breve
          </button>
        </div>
      </div>

      {/* MetaScope Forensic */}
      <div className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl hover:border-blue-600 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-blue-400">MetaScope Forensic</h2>
            <span className="inline-block bg-blue-900/40 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full border border-blue-700">
              MVP em Testes
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          Ferramenta de análise forense digital para extração e validação de metadados de arquivos e recursos web. 
          Implementa algoritmos de detecção de manipulação por IA, análise temporal e geolocalização de origem, 
          fornecendo relatórios técnicos detalhados para cadeia de custódia digital.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Análise de Metadados
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Extração de EXIF, XMP e IPTC</li>
              <li>• Timestamps de criação/modificação</li>
              <li>• Informações de dispositivo e software</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Detecção de IA
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Identificação de conteúdo sintético</li>
              <li>• Análise de padrões de geração</li>
              <li>• Marcadores de manipulação digital</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Geolocalização
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Coordenadas GPS embarcadas</li>
              <li>• Mapeamento de origem geográfica</li>
              <li>• Análise de dados de localização</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
            <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Verificação de Integridade
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Validação de hash criptográfico</li>
              <li>• Detecção de alterações pós-criação</li>
              <li>• Análise de consistência temporal</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="text-sm text-gray-400">
            <span className="font-semibold text-gray-300">Stack:</span> Python, ExifTool, ML Models, Geolocation APIs
          </div>
          <button 
            disabled
            className="bg-gray-700 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Em Breve
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-slate-900/30 border border-blue-800/50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Solicite Acesso aos MVPs</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
          Para avaliar nossas soluções em ambiente de testes, solicitar demonstrações técnicas ou discutir 
          casos de uso específicos, entre em contato com nossa equipe. Disponibilizamos ambientes sandbox 
          para validação de funcionalidades e proof of concept.
        </p>
        <a
          href="/contato"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}
