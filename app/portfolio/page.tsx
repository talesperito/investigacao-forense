import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software de Perícia Digital e Investigação Forense | InvestigaçãoForense.com",
  description: "Plataforma de tecnologia para perícia digital, investigação forense e análise de dados. Desenvolvemos software, BI e sistemas de evidências para órgãos públicos, escritórios e compliance.",
};

function DemoSeal() {
  return (
    <div
      className="absolute top-3 right-3 z-10 flex flex-col items-center gap-0.5 pointer-events-none"
      title="Demonstração disponível"
      aria-label="Demonstração disponível"
    >
      <svg
        width="34"
        height="40"
        viewBox="0 0 44 52"
        role="img"
        aria-hidden="true"
        className="drop-shadow-[0_3px_8px_rgba(14,165,233,0.30)]"
      >
        <defs>
          <linearGradient id="demoShield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        <path
          d="M22 2L38 8v13c0 11-7.2 20-16 23-8.8-3-16-12-16-23V8l16-6z"
          fill="url(#demoShield)"
          stroke="#e0f2fe"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="21" r="9" fill="rgba(2,6,23,0.35)" />
        <path
          d="M18.5 21.2l2.6 2.8 4.4-5"
          fill="none"
          stroke="#ecfeff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[9px] leading-[1.05] text-cyan-200/90 font-semibold text-center tracking-[0.01em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
        Disponível
        <br />
        para teste
      </span>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Plataforma de Tecnologia para Investigação e Perícia Digital
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Desenvolvemos software e plataformas de dados para investigação forense, perícia digital e análise de evidências. Nossas soluções combinam engenharia de software, BI, automação e ciência de dados para apoiar equipes periciais, jurídicas e de auditoria em ambientes de alta responsabilidade.
          </p>
        </div>
      </section>

      {/* PERFIL TALES */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-blue-500">
                <Image
                  src="/tales.PNG"
                  fill
                  alt="Foto de Tales Vieira"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl font-bold text-white mb-2">
                Tales Vieira
              </h2>
              <p className="text-blue-400 font-semibold mb-4">Especialista em Perícia Digital e Ciência de Dados Forense</p>
              <p className="text-gray-300 leading-relaxed">
                Perito Oficial da Polícia Civil de Minas Gerais desde 2005.
                Possui graduação e mestrado em Química pela UFMG, doutorado
                em Química pela UFLA e Pós-Doutorado em Ciência de Dados pela UFLA.
                Professor universitário e palestrante desde 2004.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pesquisador e perito atuando no desenvolvimento de métodos computacionais, IA e sistemas para investigação forense e validação de evidências digitais. Especializado em análise de dados forenses, rastreabilidade de provas e auditoria técnica.
              </p>

              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/peritotales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIL MATHEUS */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4 md:order-1 order-2">
              <h2 className="text-3xl font-bold text-white mb-2">
                Matheus Vieira
              </h2>
              <p className="text-blue-400 font-semibold mb-4">Engenheiro de Software Forense</p>
              <p className="text-gray-300 leading-relaxed">
                Graduado em Análise e Desenvolvimento de Sistemas pelo Unilavras e
                graduando pelo 4° período em Direito pela UFLA. Estagiário de Performance
                e Dados na Critéria Financial Group.
                Diretor do Grupo de Estudos em Perícia e Investigação Digital (GEPID).
              </p>
              <p className="text-gray-300 leading-relaxed">
                Desenvolvedor full-stack especializado em plataformas de investigação forense, análise de dados, automação de evidências e sistemas de laudos periciais. Atua com BI, compliance e soluções de rastreabilidade para instituições públicas e privadas.
              </p>

              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/matheusvieira-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center md:order-2 order-1">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-blue-500">
                <Image
                  src="/matheus.jpg"
                  fill
                  alt="Foto de Matheus Vieira"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projetos e Atuação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 1 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                BI para Segurança Pública e Investigação Forense (2024)
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-yellow-600/20 text-yellow-400">
                  Pesquisa Científica
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Análise de Dados Forenses
                </span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">
                  Estágio: Produção Interna
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Projeto concluído com dashboards construídos para apoiar a gestão pericial e decisões operacionais na segurança pública. A solução organiza dados de múltiplas frentes em painéis de análise com foco em rastreabilidade e leitura gerencial.
                <br /><br />
                Resultado prático: ganho superior a 60% na agilidade das análises de gestão. Aplicação direcionada ao contexto institucional da PCMG.
                <br /><br />
                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-032-05008-3_17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Ver publicação científica
                </a>
              </p>
            </div>

            {/* 2 */}
            <div className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <DemoSeal />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">
                FaceID Forense
                <br />
                Reconhecimento Facial
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  IA / Deep Learning
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Perícia Digital
                </span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">
                  Estágio: Piloto Avançado
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Script de reconhecimento facial forense com uso real em bases de dados da PCMG, desenvolvido para apoiar triagem e validação de evidências visuais em cenários investigativos.
                <br /><br />
                Desempenho atual: 100% de acerto em rostos individuais e acima de 85% em imagens com múltiplos rostos. Está em fase final de desenvolvimento para operação prática ampliada.
              </p>
            </div>

            {/* 3 */}
            <div className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <DemoSeal />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">
                EvidenceOS: Gestão de Evidências e Vestígios
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Software Forense
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Rastreabilidade
                </span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">
                  Estágio: Produção Interna
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Aplicação já em funcionamento interno na unidade regional de custódia para gestão de vestígios, consulta estruturada e controle do fluxo de objetos sob responsabilidade pericial.
                <br /><br />
                O sistema emite relatórios e alertas, permite agendamento de retirada e opera com MySQL. Está em fase de hospedagem e deploy (Hostinger) para compartilhamento regional.
              </p>
            </div>

            {/* 4 */}
            <div className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <DemoSeal />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">
                MetaScope — Software de Perícia Digital
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Perícia Digital
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Análise de Evidências
                </span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">
                  Estágio: Piloto com Parceiros
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Solução mais avançada do portfólio para análise de deepfakes, verificação de autenticidade e validação de integridade de arquivos digitais em contextos sensíveis.
                <br /><br />
                Atualmente em fase de testes com comunidades e parceiros, com evolução contínua do motor analítico e aplicação em cenários de perícia, compliance, advocacia e jornalismo investigativo.
              </p>
            </div>

            {/* 5 */}
            <div className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <DemoSeal />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">
                CondoHub & Sistema de Auditoria Geolocalizada
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Gestão Corporativa
                </span>
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">
                  Compliance
                </span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">
                  Estágio: Produção
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma com banco de dados SQL implantado e foco em gestão condominial com trilhas de compliance e governança documental para operações do dia a dia.
                <br /><br />
                Inclui ponto eletrônico, integridade de documentos, agendamentos, atas, ocorrências e recursos de auditoria geolocalizada, com posicionamento voltado a condomínios e administradoras.
              </p>
            </div>

            {/* 6 */}
            <div className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <DemoSeal />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">
                ScamTrace — Investigação de Fraudes
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Investigação Forense
                </span>
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">
                  Análise de Evidências
                </span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">
                  Estágio: Piloto com Parceiros
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma de investigação forense para detecção de fraudes digitais e ataques homográficos, com arquitetura pensada para reduzir exposição do usuário a riscos durante a análise.
                <br /><br />
                Combina análise de links suspeitos, OCR avançado e rastreabilidade de evidências, com acurácia superior a 90% em cenários de validação de fraude e suporte a compliance.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Análise e Integridade
                <br />
                de Laudos e Documentos
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Análise de Dados Forenses
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Automação
                </span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">
                  Estágio: Piloto Inicial
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Análise assistida por IA para laudos periciais e outros documentos, com foco em triagem técnica e identificação de padrões relevantes.
                <br /><br />
                Projeto em parceria com outros desenvolvedores. A arquitetura em camadas reduz consumo de tokens de LLM e acelera o fluxo com rastreabilidade.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Perícia Digital em Dispositivos Móveis
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">
                  Perícia Digital
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  Extração de Evidências
                </span>
                <span className="text-xs px-2 py-1 rounded border border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-300 font-semibold">
                  Estágio: P&D Inicial
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Atuação especializada em extração forense de dados, análise de evidências e tratamento técnico de informações oriundas de smartphones e mídias digitais.
                <br /><br />
                Projeto em parceria com outros desenvolvedores para interpretar relatórios com grafos, padrões de repetição e análise comportamental. Meta: reduzir análises de 12 horas para cerca de 2 horas.
              </p>
            </div>

            {/* 9 */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Plataforma InvestigacaoForense.com
              </h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">
                  Forensic Data Platform
                </span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">
                  Estágio: Produção
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Plataforma institucional construída integralmente com TypeScript e React para posicionamento técnico-comercial, autoridade de marca e geração de oportunidades de parceria.
                <br /><br />
                Projeto com SEO estruturado e indexação completa no Google, incluindo aprovação no Google AdSense, resultado de implementação cuidadosa de conteúdo, arquitetura e qualidade técnica.
              </p>
            </div>

          </div>

          <p className="text-center text-gray-400 italic mt-12">
            Algumas dessas aplicações podem ser demonstradas mediante solicitação.
          </p>
          <p className="text-center mt-4">
            <a href="/aplicacoes" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              🚀 Ver aplicacoes em fase final de desenvolvimento
            </a>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <a href="/plataforma-dados-criticos" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              → Conheça nossa Plataforma de Dados
            </a>
            <a href="/solucoes" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              → Veja nossas Soluções
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO SEO */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Tecnologia para Investigação Forense e Perícia Digital
          </h2>
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            A Investigação Forense desenvolve software, plataformas de dados e sistemas de evidências digitais para apoiar peritos, investigadores, escritórios jurídicos e equipes de compliance. Nossas soluções incluem gestão de laudos periciais, análise de grandes volumes de dados, geolocalização, auditoria, integridade por hash e rastreabilidade de provas.
          </p>
        </div>
      </section>
    </main>
  );
}
