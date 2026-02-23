'use client';

import { Link } from '@/i18n/routing';

export default function LandingPagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="px-8 py-32 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Mentoria Especializada em Investigação Forense
        </h1>
        <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Desenvolvemos profissionais altamente qualificados para o mercado de perícia criminal e investigação forense.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded hover:bg-blue-700 transition">
            Começar Agora
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded hover:bg-blue-600 hover:text-white transition">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">O que você vai aprender:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-white/5 rounded-lg p-8 text-center hover:bg-gray-white/10 transition">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-4">Fundamentos de Perícia</h3>
              <p className="text-gray-300">
                Aprenda os fundamentos e metodologias utilizadas em investigação forense moderna.
              </p>
            </div>
            <div className="bg-gray-white/5 rounded-lg p-8 text-center hover:bg-gray-white/10 transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-4">Casos Práticos</h3>
              <p className="text-gray-300">
                Estude e analise casos reais de investigação criminal com especialistas.
              </p>
            </div>
            <div className="bg-gray-white/5 rounded-lg p-8 text-center hover:bg-gray-white/10 transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Mentoria Individual</h3>
              <p className="text-gray-300">
                Receba orientação personalizada de especialistas em perícia criminal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Pronto para iniciar sua jornada na investigação forense?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Conecte-se com especialistas e desenvolva suas habilidades em um ambiente de aprendizado colaborativo.
          </p>
          <Link
            href="/servicos"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded hover:bg-blue-700 transition"
          >
            Conheça Nossos Serviços
          </Link>
        </div>
      </section>
    </main>
  );
}
