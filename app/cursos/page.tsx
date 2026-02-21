import type { Metadata } from 'next';

const pageUrl = 'https://www.investigacaoforense.com/cursos';
const ogImage = 'https://www.investigacaoforense.com/tales.PNG';

export const metadata: Metadata = {
  title: 'Cursos de Perícia Criminal e Investigação Forense | Investigação Forense',
  description:
    'Cursos especializados em perícia criminal, toxicologia forense e medicina legal. Formação aplicada para profissionais e estudantes da área forense.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'pt-BR': pageUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: pageUrl,
    title: 'Cursos de Perícia Criminal e Investigação Forense | Investigação Forense',
    description:
      'Acesse cursos com foco prático em investigação forense e desenvolvimento técnico para atuação profissional.',
    siteName: 'Investigação Forense',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Cursos de perícia criminal e investigação forense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursos de Perícia Criminal e Investigação Forense | Investigação Forense',
    description:
      'Formação forense com cursos aplicados em criminalística, toxicologia e medicina legal.',
    images: [ogImage],
  },
};

type Course = {
  title: string;
  description: string;
  purchaseUrl?: string;
  status?: 'coming-soon';
};

const courses: Course[] = [
  {
    title: 'Curso de Criminalística',
    description:
      'Fundamentos e técnicas avançadas de criminalística para atuação em investigação e produção de prova técnica.',
    purchaseUrl: 'https://go.hotmart.com/G95791521G?dp=1',
  },
  {
    title: 'Curso de Toxicologia Forense',
    description:
      'Especialização em análise toxicológica e identificação de substâncias em contextos periciais.',
    purchaseUrl: 'https://pay.hotmart.com/B60779024B?off=p8pznmfb',
  },
  {
    title: 'Curso de Medicina Legal',
    description:
      'Princípios e práticas de medicina legal aplicados à investigação forense e ao contexto jurídico.',
    purchaseUrl: 'https://go.hotmart.com/E60780435Q',
  },
  {
    title: 'Perícia Digital (Em breve)',
    description:
      'Técnicas de perícia em informática: análise de malware, recuperação de dados, metadados e rastreamento digital.',
    status: 'coming-soon',
  },
  {
    title: 'Segurança da Informação (Em breve)',
    description:
      'Defesa contra phishing, engenharia social, deepfakes e outras ameaças digitais em ambientes reais.',
    status: 'coming-soon',
  },
];

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Cursos de Perícia Criminal e Investigação Forense</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Formação técnica com foco prático para quem deseja atuar com rigor científico em perícia criminal,
          investigação forense e análise de evidências.
        </p>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course) => (
              <article key={course.title} className="rounded-lg p-8 transition border border-gray-700 bg-gray-900/50 hover:border-blue-500">
                <h2 className="text-2xl font-bold text-white mb-4">{course.title}</h2>
                <p className="text-gray-300 mb-6 text-lg">{course.description}</p>

                {course.status === 'coming-soon' ? (
                  <span className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded">
                    Em breve
                  </span>
                ) : (
                  <a
                    href={course.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition"
                  >
                    Acessar curso
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 pb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Conteúdo completo na Hotmart</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Os cursos incluem videoaulas, materiais de apoio e certificado de conclusão. Use o botão do curso desejado
          para acessar a página oficial de matrícula.
        </p>
        <div className="text-gray-300 space-y-2">
          <p>Qualidade técnica e didática aplicada</p>
          <p>Suporte para evolução profissional</p>
          <p>Certificado ao final de cada formação</p>
        </div>
      </section>
    </main>
  );
}

