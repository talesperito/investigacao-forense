'use client';

export default function ServicosPage() {
  const services = [
    {
      title: "Locais simulados de Perícia",
      price: "R$ 1.500,00",
      description: "Cenários que simulam situações de crimes ou acidentes, proporcionando aos discentes sentirem-se verdadeiros CSI."
    },
    {
      title: "Consultoria educacional em investigação forense",
      price: "R$ 1.200,00",
      description: "Apoio na criação de disciplinas eletivas em Investigação Forense para o Ensino Médio e Superior."
    },
    {
      title: "Consultoria em perícias cíveis e trabalhistas",
      price: "R$ 2.000,00",
      description: "Mentorias e consultoria especializada para peritos judiciais e particulares."
    },
    {
      title: "Mentorias individuais e personalizadas",
      price: "R$ 100,00",
      description: "Orientação personalizada e mentoria para peritos e profissionais da área."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Conheça meus serviços!</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ofereço apoio remoto ou presencial, através de consultorias ou atividades experimentais. Abaixo descrevo detalhadamente cada um dos meus serviços oferecidos bem como seu objetivo.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-white/5 rounded-lg p-8 hover:bg-gray-white/10 transition">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{service.title}</h3>
                <p className="text-3xl font-bold text-blue-400 text-center mb-4">{service.price}</p>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <button className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
                  Conheça Mais!
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-4xl mx-auto text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-8">Serviços adicionais:</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">PALESTRAS GRATUITAS</h3>
              <p>Como forma de conhecer meu trabalho, são ofertadas GRATUITAMENTE palestras online na área de Investigação Forense para o Ensino Médio ou Superior.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">CONSULTORIA EDUCACIONAL DE ACOMPANHAMENTO DOCENTE</h3>
              <p>Apoio para escrita de material, preparação de experimentos ou discussão de formas de abordagem com os discentes.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">CRIÇÃO DE DISCIPLINAS OU CURSOS LIVRES DE EXTENSÃO</h3>
              <p>Para a educação básica, ofereço apoio na criação de disciplinas eletivas. Para Instituições de Ensino Superior, auxilio na criação e condução de cursos livres.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
