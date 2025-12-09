'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Bem-vindo ao canal dedicado ao estudo da Inves­tigação Forense🪫
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Nossos artígos são cuidadosamente elaborados, fundamentados em rigorosas pesquisas científicas, proporcionando um mergulho aprofundado no fascinante mundo da Investigação Forense.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Aqui você vai encontrar:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-2xl">📚</span>
              <span>Artígos sobre as ciências forenses</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">🔔</span>
              <span>Principais notícias da segurança pública</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">📄</span>
              <span>Materiais para download</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">🔍</span>
              <span>Casos periciais e Quiz para você praticar</span>
            </li>
          </ul>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
              SAIBA MAIS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Matérias em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-white/5 rounded-lg p-6 hover:bg-gray-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">Perícia Criminal e Inteligência Artificial: O Futuro das Investigações</h3>
              <p className="text-sm text-gray-400 mb-4">Por Tales Vieira</p>
              <p className="text-sm text-gray-400">outubro 24, 2024</p>
            </article>
            <article className="bg-gray-white/5 rounded-lg p-6 hover:bg-gray-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">Falsificação de Produtos de Limpeza e Higiene</h3>
              <p className="text-sm text-gray-400 mb-4">Por Tales Vieira</p>
              <p className="text-sm text-gray-400">outubro 19, 2024</p>
            </article>
            <article className="bg-gray-white/5 rounded-lg p-6 hover:bg-gray-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">Tecnologia na Perícia Criminal: Ferramentas Avançadas</h3>
              <p className="text-sm text-gray-400 mb-4">Por Tales Vieira</p>
              <p className="text-sm text-gray-400">outubro 11, 2024</p>
            </article>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Meus Serviços</h2>
          <div className="space-y-4 text-gray-300 mb-12">
            <p>✅ Consultoria para Instituições de Educação Básica no apoio à implantação de Itinerários Formativos em Investigação Forense</p>
            <p>✅ Criação de disciplinas em Investigação Forense para Instituições de Ensino Superior</p>
            <p>✅ Organização de Locais Simulados de perícia com aplicação de metodologias ativas</p>
            <p>✅ Capacitações e Palestras para Instituições</p>
            <p>✅ Mentorias para Peritos Judiciais e Particulares</p>
            <p>✅ Cursos preparatórios para concursos</p>
          </div>
          <div className="text-center">
            <Link href="/servicos" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
              CONHEÇA TODOS OS SERVIÇOS E CONDIÇÕES
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
