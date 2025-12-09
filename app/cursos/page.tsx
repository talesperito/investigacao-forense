'use client';

export default function CursosPage() {
  const courses = [
    {
      title: "Curso de Perícia Criminal Avançada",
      description: "Aprenda as técnicas avançadas de investigação criminal com especialistas.",
      duration: "6 semanas",
      level: "Avançado"
    },
    {
      title: "Curso de Forensica Digital",
      description: "Especialização em análise forense de dispositivos digitais e recuperação de dados.",
      duration: "8 semanas",
      level: "Avançado"
    },
    {
      title: "Curso de Criminología",
      description: "Fundamentos de criminologia e teoria criminal para profissionais da área.",
      duration: "4 semanas",
      level: "Intermediário"
    },
    {
      title: "Curso Preparatório para Concursos",
      description: "Preparação completa para concursos de Perito Criminal e áreas relacionadas.",
      duration: "12 semanas",
      level: "Intermediário"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Nossos Cursos</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Desenvolva suas habilidades em investigação forense com nossos cursos especializados e orientados por especialistas da área.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-white/5 rounded-lg p-8 hover:bg-gray-white/10 transition">
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-gray-300 mb-6">{course.description}</p>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700">
                  <span className="text-sm text-gray-400">📚 Duração: {course.duration}</span>
                  <span className={`text-sm font-bold px-3 py-1 rounded ${
                    course.level === 'Avançado' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-white/5 px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Pronto para avançar sua carreira?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco para maiores informações sobre horários, valores e forma de inscrição.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
          Entre em Contato
        </button>
      </section>
    </main>
  );
}
