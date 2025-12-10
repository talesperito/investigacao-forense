import Image from "next/image";
import "./styles.css";

export const metadata = {
  title: "Portfólio | InvestigacaoForense.com",
  description: "Portfólio profissional de Tales Vieira e Matheus Vieira.",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-container">
      <section className="portfolio-header">
        <h1>Nosso Portfólio</h1>
        <p>
          Conheça os profissionais responsáveis pelo desenvolvimento das nossas
          soluções e alguns dos projetos realizados ao longo dos últimos anos.
        </p>
      </section>

      {/* TALES */}
      <section className="profile-section">
        <div className="profile-photo">
          <Image
            src="/tales.jpg"
            width={260}
            height={260}
            alt="Foto de Tales Vieira"
            className="profile-img"
          />
        </div>
        <div className="profile-text">
          <h2>Tales Vieira</h2>
          <p>
            Criminalista, Perito Oficial da Polícia Civil de Minas Gerais desde
            2005, Pós-Doutor em Ciência de Dados pela UFLA e professor
            universitário. Atua em perícias digitais, ciência de dados,
            segurança pública, desenvolvimento de sistemas e automações
            aplicadas a processos periciais e investigativos.
          </p>
          <p>
            Experiência em Python, Power BI, análise forense, big data,
            machine learning, integridade de provas digitais e desenvolvimento
            de soluções tecnológicas para órgãos públicos.
          </p>
        </div>
      </section>

      {/* MATHEUS */}
      <section className="profile-section reverse">
        <div className="profile-photo">
          <Image
            src="/matheus.jpg"
            width={260}
            height={260}
            alt="Foto de Matheus Vieira"
            className="profile-img"
          />
        </div>
        <div className="profile-text">
          <h2>Matheus Vieira</h2>
          <p>
            Estudante de Direito (UFLA) e Análise e Desenvolvimento de Sistemas
            (Unilavras). Integrante do Grupo de Estudos em Informática Forense e
            Cibersegurança, atua no desenvolvimento de sistemas, Python,
            reconhecimento facial, BI e soluções aplicadas à segurança pública.
            Inglês avançado e forte foco em tecnologia e direito.
          </p>
          <p>
            Diretor do GEPID (2025–atual) e Estagiário na Critéria (2025–atual).
            Desenvolve automações, sistemas web e scripts aplicados a
            investigações digitais.
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="projects-section">
        <h2>Projetos e Atuação</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>BI para Segurança Pública (2024)</h3>
            <p>
              Construção de dashboards Power BI para avaliação de gestão de
              laudos e deslocamentos periciais. Trabalho apresentado no
              Interact 2025 (evento nível A em TI).
            </p>
          </div>

          <div className="project-card">
            <h3>Reconhecimento Facial com IA (2024)</h3>
            <p>
              Desenvolvimento de modelo de Deep Learning em Python para
              implementação em banco de dados oficial da Polícia Civil de MG.
            </p>
          </div>

          <div className="project-card">
            <h3>Sistema de Gestão de Vestígios (2023–2024)</h3>
            <p>
              Sistema em JavaScript com autenticação Google Drive para controle
              de vestígios da Unidade Regional de Custódia de Lavras/MG.
            </p>
          </div>

          <div className="project-card">
            <h3>Ponto Eletrônico Georreferenciado (2024–2025)</h3>
            <p>
              MVP em TypeScript + React para registro de ponto e rondas sem
              necessidade de totens físicos.
            </p>
          </div>

          <div className="project-card">
            <h3>MetaScope Forense (2023–2024)</h3>
            <p>
              Aplicação web para análise forense digital, leitura de metadados,
              detecção de manipulação por IA, hash SHA-256 e geração de laudos
              técnicos via navegador.
            </p>
          </div>

          <div className="project-card">
            <h3>ScamTrace – Rastreamento de Fraudes</h3>
            <p>
              SPA em React 19 + Tailwind que analisa mensagens suspeitas (SMS,
              WhatsApp, e-mail) e detecta phishing usando IA Gemini.
            </p>
          </div>

          <div className="project-card">
            <h3>Extração de Dados de Smartphones (2022–atual)</h3>
            <p>
              Estudos avançados com UFED e XRY para extração e gestão de laudos
              em cloud na Polícia Civil de Minas Gerais.
            </p>
          </div>

          <div className="project-card">
            <h3>Desenvolvimento do site InvestigacaoForense.com (2020–2025)</h3>
            <p>
              Criação do site em WordPress e posterior migração para HTML/CSS
              estático, aprovado no Google Adsense e otimizado em SEO.
            </p>
          </div>

        </div>

        <p className="availability-note">
          Algumas dessas aplicações podem ser demonstradas ou testadas mediante
          solicitação aos profissionais.
        </p>
      </section>
    </main>
  );
}
