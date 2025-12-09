import Link from 'next/link';

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* SEÇÃO 1: HERO/HEADER */}
      <section className="px-4 md:px-8 py-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Nossos Serviços
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Soluções tecnológicas personalizadas para transformar seu negócio
        </p>
      </section>

      {/* SEÇÃO 2: INTRODUÇÃO */}
      <section className="px-4 md:px-8 py-12 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Combinamos expertise técnica, experiência operacional e visão estratégica para entregar soluções que resolvem problemas reais. Cada projeto é desenhado sob medida, com foco em segurança, performance e impacto mensurável no seu dia a dia.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3: GRID DE SERVIÇOS */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* SERVIÇO 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Desenvolvimento de Sistemas e Aplicações Sob Medida
              </h2>
              <h3 className="text-lg text-blue-400 mb-4 font-semibold">
                Sistemas Personalizados com Foco em Segurança
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desenvolvemos soluções tecnológicas customizadas que priorizam a proteção e integridade dos seus dados. Nossos sistemas são projetados para ambientes que exigem controle rigoroso de documentos, rastreabilidade completa de operações e verificação de autenticidade de arquivos. Utilizamos criptografia avançada, logs auditáveis e arquiteturas resilientes para garantir que suas informações estejam sempre protegidas e acessíveis apenas para quem deve ter acesso. Ideal para organizações que lidam com dados sensíveis, documentação legal, registros médicos ou qualquer operação onde segurança e confiabilidade são innegoáveis.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Verificação de integridade de arquivos e documentos</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sistemas com trilha de auditoria completa</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Criptografia e controle de acesso granular</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conformidade com LGPD e normas de segurança</span>
                </li>
              </ul>
              <Link 
                href="/contato"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* SERVIÇO 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Criação de Plataformas SaaS para Negócios e Operações
              </h2>
              <h3 className="text-lg text-blue-400 mb-4 font-semibold">
                Plataformas Escaláveis que Impulsionam Seu Negócio
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforme sua ideia em uma plataforma robusta e lucrativa. Desenvolvemos soluções SaaS completas, desde o conceito até o lançamento, com foco em escalabilidade, experiência do usuário e receita recorrente. Nossas plataformas incluem sistemas de gestão documental, dashboards analíticos inteligentes, automações que economizam horas de trabalho manual e integrações com ferramentas que seu time já usa. Entregamos soluções prontas para conquistar clientes, com infraestrutura na nuvem, segurança de ponta a ponta e suporte técnico especializado. Ideal para empreendedores digitais, escritórios de advocacia, clínicas, empresas do agronegócio e condomínios que buscam digitalizar processos e gerar valor através da tecnologia.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Arquitetura multi-tenant escalável</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dashboards e relatórios em tempo real</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modelo de receita recorrente (MRR)</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integrações com sistemas legados e APIs</span>
                </li>
              </ul>
              <Link 
                href="/contato"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* SERVIÇO 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Consultoria Técnica em Perícias, Auditoria e Rastreabilidade
              </h2>
              <h3 className="text-lg text-blue-400 mb-4 font-semibold">
                Expertise Forense Aplicada à Tecnologia
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Com mais de 20 anos de experiência em segurança pública, investigação e gestão operacional, oferecemos consultoria especializada para organizações que precisam de rigor técnico e metodologia investigativa aplicados à tecnologia. Atuamos em auditorias de sistemas, análise de conformidade, elaboração de laudos técnicos, implementação de controles de rastreabilidade e preparação de ambientes para certificações. Nossa vivência em ambientes de alta criticidade nos permite identificar vulnerabilidades, propor soluções práticas e desenhar processos que resistem à análise mais rigorosa. Ideal para empresas que passam por auditorias, precisam implementar compliance, estão sob investigação ou simplesmente querem garantir que seus processos tecnológicos sejam à prova de falhas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Análise forense de sistemas e dados</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Elaboração de laudos e pareceres técnicos</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementação de trilhas de auditoria</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Preparação para certificações (ISO, SOC2, etc)</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mais de duas décadas em ambientes críticos</span>
                </li>
              </ul>
              <Link 
                href="/contato"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* SERVIÇO 4 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Gestão de Projetos, Processos e Integrações Tecnológicas
              </h2>
              <h3 className="text-lg text-blue-400 mb-4 font-semibold">
                Orquestramos Tecnologia, Conectamos Ecossistemas
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tecnologia só gera valor quando funciona em harmonia. Atuamos como maestros da transformação digital, coordenando equipes, integrando sistemas legados com soluções modernas e desenhando processos que fazem sentido para quem executa. Não entregamos apenas código: entregamos operações funcionais. Mapeamos seu fluxo de trabalho atual, identificamos gargalos, propomos automações inteligentes e garantimos que diferentes plataformas conversem entre si sem fricção. Gerenciamos a implementação do início ao fim, capacitamos sua equipe e permanecemos ao seu lado até que a solução esteja rodando de forma autônoma. Transformamos caos tecnológico em sinfonia operacional.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integração entre sistemas (ERPs, CRMs, legados)</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mapeamento e otimização de processos</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gestão ágil de projetos tecnológicos</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Migração de dados e modernização de sistemas</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Capacitação de equipes e transferência de conhecimento</span>
                </li>
              </ul>
              <Link 
                href="/contato"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Solicitar Orçamento
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CALL TO ACTION FINAL */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vamos Conversar Sobre Seu Projeto?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Agende uma conversa sem compromisso e descubra como podemos ajudar sua organização a alcançar novos patamares através da tecnologia.
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
              Ver Aplicações
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
