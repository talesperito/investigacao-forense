'use client';

import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      id: 'ia-pericia-criminal',
      title: 'Perícia Criminal e Inteligência Artificial: O Futuro das Investigações',
      author: 'Tales Vieira',
      date: 'Outubro 24, 2024',
      category: 'Inteligência Artificial',
      excerpt: 'A Inteligência Artificial está transformando a perícia criminal. Explore como a IA revoluciona a forma como as investigações criminais são conduzidas.',
    },
    {
      id: 'tecnologia-pericia',
      title: 'Tecnologia na Perícia Criminal',
      author: 'Tales Vieira',
      date: 'Novembro 2024',
      category: 'Forense Digital',
      excerpt: 'Descubra as ferramentas avançadas que os peritos criminais usam para coleta e análise de evidências em investigações modernas.',
    },
    {
      id: 'desafios-eticos',
      title: 'Desafios Éticos na Perícia Criminal',
      author: 'Tales Vieira',
      date: 'Outubro 2024',
      category: 'Ética',
      excerpt: 'A perícia criminal desempenha papel crucial na aplicação da justiça, fornecendo evidências científicas.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-2">Notícias e Matérias</h1>
        <p className="text-gray-600 mb-12">Artigos sobre Investigação Forense e Perícia Criminal</p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span>{post.author}</span>
                <span>•</span>
                <span className="text-gray-500">{post.date}</span>
                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Leia mais →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
