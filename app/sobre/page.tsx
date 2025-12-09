'use client';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Perito Tales Vieira</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Esse site foi criado com o intuito de apresentar as Ciências Forenses de uma forma simples e interativa.
        </p>
      </section>

      {/* About Content */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
          <p>
            Trata-se de uma proposta inovadora a qual levará informação a estudantes e demais interessados na área de química, tecnologia da informação e perícia, através de artigos baseados em informações científicas. Além dos materiais e aulas sobre Investigação Forense, são apresentados artigos diversos sobre química e tecnologia, em conectividade com fenômenos que muitos conhecem.
          </p>
          <p>
            Com relação às Ciências Forenses, temos simplesmente uma das áreas que mais crescem na atualidade e se relaciona a praticamente todas áreas do conhecimento. Dentro dessa grande área está a Criminalistica, dedicada ao estudo investigativo criminal na qual estão inseridos os Peritos Criminais e Médicos Legistas.
          </p>
          <p>
            Desde criança sempre fui apaixonado por química e pela ciência investigativa, o que inevitavelmente me conduziu para essa fascinante área da Perícia e da Química. Sou graduado e mestre em Química pela Universidade Federal de Minas Gerais, doutor em agroquimica pela Universidade Federal de Lavras e Perito Criminal da Polícia Civil de Minas Gerais.
          </p>
          <p>
            Atualmente faço pós doutorado na Universidade Federal de Lavras na área de Ciência dos Dados no Departamento de Ciência da Computação. Na docência, atuo desde 2000 como professor de Química e desde 2006 no Centro Universitário de Lavras para diversos cursos de graduação e pós graduação.
          </p>
          <p className="text-center text-blue-400 font-bold pt-4">
            Esperamos que todos aproveitem esse espaço da melhor forma possível e aguar do suas sugestões.
          </p>
          <p className="text-center text-2xl font-bold text-white pt-4">
            Ótima leitura! 📚
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Artículos Recomendados</h2>
          <div className="space-y-6 text-gray-300">
            <article className="bg-gray-white/5 rounded-lg p-6 hover:bg-gray-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">Você sabe o que é a Investigação Forense e como pode trabalhar nessa área?</h3>
              <p className="text-sm text-gray-400">Por Tales Vieira | setembro 6, 2024</p>
            </article>
            <article className="bg-gray-white/5 rounded-lg p-6 hover:bg-gray-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">Explorando a Carreira de Perito Criminal</h3>
              <p className="text-sm text-gray-400">Por Tales Vieira | setembro 6, 2024</p>
            </article>
            <article className="bg-gray-white/5 rounded-lg p-6 hover:bg-gray-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">Revelando Segredos Digitais: A Importância dos Metadados na Análise Pericial</h3>
              <p className="text-gray-300 text-sm mb-2">Em todos arquivos há algo oculto que a Perícia sempre busca: Os Metadados</p>
              <p className="text-sm text-gray-400">Por Matheus Vieira | agosto 5, 2024</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
