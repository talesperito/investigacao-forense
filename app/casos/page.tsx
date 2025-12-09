'use client';

export default function CasosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-2">Casos Periciais</h1>
        <p className="text-gray-600 mb-12">Exemplos de trabalhos realizados em investigações</p>
        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold mb-3">Fraude Digital</h2>
            <p className="text-gray-700 mb-3">Análise forense de emails phishing e recuperação de dados comprometidos.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold mb-3">Falsificação de Documentos</h2>
            <p className="text-gray-700 mb-3">Perícia em documentos falsificados usando técnicas avançadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
