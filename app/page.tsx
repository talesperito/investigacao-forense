'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Professional Hero Banner */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image - full width */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90">
          <Image
            src="/hero-banner.jpg"
            alt="Tales Vieira - Data Science Specialist and Public Security Advisor"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-gray-900/90" />
        
        {/* Content overlay */}
        <div className="relative h-full flex items-end justify-center pb-12 md:pb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              TALES VIEIRA
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium drop-shadow-lg">
              Data Science Specialist and Public Security Advisor
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Bem-vindo ao canal dedicado ao estudo da Investigação Forense 🔬
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Nossos artigos são cuidadosamente elaborados, fundamentados em rigorosas pesquisas científicas, proporcionando um mergulho aprofundado no fascinante mundo da Investigação Forense.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Aqui você vai encontrar:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-2xl">📚</span>
              <span>Artigos sobre as ciências forenses</span>
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
              <span>Estudos de casos reais</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/ia-pericia-criminal" className="group">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
                <span className="text-xs font-semibold text-blue-400 uppercase">Inteligência Artificial</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-blue-400 transition">
                  Perícia Criminal e IA: O Futuro das Investigações
                </h3>
                <p className="text-gray-400 text-sm">
                  A Inteligência Artificial está transformando a perícia criminal. Explore como a IA revoluciona as investigações.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/tecnologia-pericia" className="group">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
                <span className="text-xs font-semibold text-blue-400 uppercase">Forense Digital</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-blue-400 transition">
                  Tecnologia na Perícia Criminal
                </h3>
                <p className="text-gray-400 text-sm">
                  Descubra as ferramentas avançadas que os peritos criminais usam para coleta e análise de evidências.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/desafios-eticos" className="group">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
                <span className="text-xs font-semibold text-blue-400 uppercase">Ética</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-blue-400 transition">
                  Desafios Éticos na Perícia Criminal
                </h3>
                <p className="text-gray-400 text-sm">
                  A perícia criminal desempenha papel crucial na aplicação da justiça, equilibrando justiça e privacidade.
                </p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-white/5 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Meus Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Análise Forense Digital</h3>
              <p className="text-gray-400">Expertise em investigação digital e recuperação de evidências eletrônicas</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Consultoria em Segurança</h3>
              <p className="text-gray-400">Assessoria especializada em segurança pública e prevenção criminal</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-white mb-3">Cursos e Treinamentos</h3>
              <p className="text-gray-400">Formação profissional em ciências forenses e investigação criminal</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-block bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
            >
              Conheça Mais!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
