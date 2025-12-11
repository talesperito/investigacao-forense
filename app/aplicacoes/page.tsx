'use client';

export default function AplicacoesPage() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Aplicações</h1>
        <p className="text-lg text-gray-400 mb-8">
          Nessa página apresentamos nossos sistemas para testes e validações. São MVPs com funcionalidades diversas que podem ser acessados mediante solicitação.
        </p>
        
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Em Desenvolvimento</h2>
          <p className="text-gray-300 mb-4">
            Estamos construindo uma coleção de aplicações inovadoras voltadas para:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Análise e processamento de dados forenses</li>
            <li>Automação de processos investigativos</li>
            <li>Dashboards de monitoramento e rastreamento</li>
            <li>Integrações com inteligência artificial e machine learning</li>
            <li>Ferramentas de gestão documental e auditoria</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Interessado?</h2>
        <p className="text-lg text-gray-400 mb-6">
          Para acessar nossas aplicações em fase de teste ou solicitar uma demonstração personalizada, entre em contato conosco.
        </p>
        <a
          href="/contato"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}
