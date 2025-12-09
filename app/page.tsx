'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado! Confirmamos seu email: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-700">
        <div className="text-2xl font-bold">InvestigacaoForense.com</div>
        <nav className="flex gap-8">
          <a href="#servicos" className="hover:text-blue-400 transition">Serviços</a>
          <a href="#sobre" className="hover:text-blue-400 transition">Sobre</a>
          <a href="#contato" className="hover:text-blue-400 transition">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Perícia Criminal com Inteligência e Inovação
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Serviços de investigação digital, análise forense e consultoria especializada.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
          Solicitar Consultoria
        </button>
      </section>

      {/* Services Section */}
      <section id="servicos" className="px-8 py-16 bg-gray-800/50">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Investigação Digital</h3>
            <p className="text-gray-300">Análise forense de dispositivos, recuperação de dados e preservação de evidências digitais.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Perícia Criminal</h3>
            <p className="text-gray-300">Assessoria técnica em investigações criminais e análise de elementos periciáveis.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">AI & Data Forensics</h3>
            <p className="text-gray-300">Aplicação de inteligência artificial e ciência de dados em análise forense.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Sobre</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Com mais de 20 anos de experiência em investigação criminal e perícia digital, nosso objetivo é oferecer soluções avançadas em forense, combinando metodologias tradicionais com tecnologia de ponta.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Especializado em investigação digital, análise de evidências eletrônicas e desenvolvimento de aplicações para análise forense, integrando inteligência artificial e ciência de dados.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contato" className="px-8 py-16 bg-gray-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fique Atualizado</h2>
          <p className="text-gray-300 mb-8">Receba atualizações sobre investigação forense e metodologias inovadoras.</p>
          <form onSubmit={handleSubscribe} className="flex gap-4">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 InvestigacaoForense.com. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
