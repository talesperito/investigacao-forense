'use client';

export default function CursosPage() {
  const courses = [
    {
      title: "Curso de Criminalistica",
      description: "Aprenda os fundamentos e técnicas avançadas da criminalistica forense.",
      purchaseUrl: "https://go.hotmart.com/G95791521G?dp=1"
    },
    {
      title: "Curso de Toxicologia Forense",
      description: "Especialização em análise toxicológica e detecção de substâncias em casos forenses.",
      purchaseUrl: "https://pay.hotmart.com/B60779024B?off=p8pznmfb"
    },
    {
      title: "Curso de Medicina Legal",
      description: "Estude os princípios e práticas da medicina legal aplicada à investigação.",
      purchaseUrl: "https://go.hotmart.com/E60780435Q"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Nossos Cursos</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Desenvolva suas habilidades em investigação forense com nossos cursos especializados oferecidos na plataforma Hotmart.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-white/5 rounded-lg p-8 hover:bg-gray-white/10 transition border border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{course.description}</p>
                  </div>
                </div>
                <a 
                  href={course.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition text-lg"
                >
                  Comprar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-white/5 px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Todos os Cursos Disponíveis na Hotmart</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
          Acesse os cursos completos com videoaulas, materiais de apoio e certificado de conclusão. Clique no botão "Comprar Agora" para ir à página de vendas.
        </p>
        <div className="text-gray-400">
          <p>🌟 Qualidade garantida</p>
          <p>💫 Suporte ao aluno</p>
          <p>🎯 Certificado ao final</p>
        </div>
      </section>
    </main>
  );
}
