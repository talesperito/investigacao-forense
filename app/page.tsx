'use client';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{backgroundImage: 'url(/hero-banner.jpg)'}}>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Tecnologia, Dados e Soluções Inteligentes</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl">Transformamos processos complexos em ferramentas simples, eficientes e inteligentes</p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg font-semibold text-lg">
              Conheça Nosso Portfólio
            </a>
            <a href="/aplicacoes" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg font-semibold text-lg">
              Explore Nossas Aplicações
            </a>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Bem-vindo(a). Somos um estúdio especializado em tecnologia, ciência de dados e soluções digitais voltadas para transformar processos complexos em ferramentas simples, eficientes e inteligentes. Atuamos no desenvolvimento de SaaS, sistemas personalizados, dashboards analíticos, automações e aplicações integradas, sempre com foco em performance, segurança e resultados mensuráveis.
          </p>
        </div>
      </section>

      {/* NOSSA EXPERTISE */}
      <section className="py-20 px-4 bg-gray-800 bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Como Trabalhamos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Desenvolvimento Completo</h3>
              <p className="text-gray-300">SaaS, sistemas personalizados, dashboards analíticos, automações e aplicações integradas</p>
            </div>
            
            {/* Card 2 */}
            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Foco em Resultados</h3>
              <p className="text-gray-300">Performance, segurança e resultados mensuráveis em cada solução entregue</p>
            </div>
            
            {/* Card 3 */}
            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Experiência Sólida</h3>
              <p className="text-gray-300">Mais de 20 anos em segurança pública, gestão e análise operacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA PROFISSIONAL */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Carregamos mais de 20 anos de experiência em segurança pública, gestão e análise operacional, o que nos permite compreender profundamente ambientes que exigem rigor, rastreabilidade, tomada de decisão rápida e confiabilidade absoluta.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Essa vivência prática se reflete na forma como projetamos e entregamos soluções: com precisão técnica, responsabilidade e visão estratégica.
          </p>
        </div>
      </section>

      {/* SETORES ATENDIDOS */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Setores que Atendemos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-900 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Jurídico</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Corporativo</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Perícias</span>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-900 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Agronegócio</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Gestão Documental</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>Operações Ambientais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPROMISSO */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 border-l-4 border-blue-600 bg-gray-800/50 rounded-lg">
            <p className="text-xl text-gray-200 leading-relaxed text-center">
              Acreditamos em soluções feitas para resolver problemas reais. Por isso, cada projeto é pensado de ponta a ponta: arquitetura, experiência do usuário, segurança, escalabilidade e impacto direto no seu dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS E CURSOS */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">O Que Oferecemos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* SERVIÇOS */}
            <div className="flex flex-col">
<h3 className="text-2xl font-bold text-gray-900 mb-8">Serviços</h3>              <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
<li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
<span className="text-gray-900">Desenvolvimento de Sistemas e Aplicações Sob Medida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Criação de Plataformas SaaS para Negócios e Operações</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Consultoria Técnica em Perícias, Auditoria e Rastreabilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Gestão de Projetos, Processos e Integrações Tecnológicas</span>
                </li>
              </ul>
              <a href="/servicos" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg text-center">
                Conheça Nossos Serviços
              </a>
            </div>
            
            {/* CURSOS */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Cursos e Treinamentos</h3>
              <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Ciências Forenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Análise de Dados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Segurança da Informação</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Desenvolvimento de Software</span>
                  <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Curso de Criminalística</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Curso de Toxicologia Forense</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Curso de Medicina Legal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-900">Curso de Perícia Digital (Em breve)</span>
                </li>
                </li>
              </ul>
              <a href="/cursos" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg text-center">
                Ver Cursos Disponíveis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Pronto para Transformar Sua Operação?</h2>
          <p className="text-xl text-gray-300 mb-12">Conheça nossas soluções e veja como podemos ajudar seu negócio</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg text-lg">
              Ver Portfólio Completo
            </a>
            <a href="/contato" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg font-semibold text-lg">
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
