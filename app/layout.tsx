import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software para Dados, Documentos e Decisões Críticas | Investigação Forense",
  description: "Desenvolvemos software e plataformas de dados para ambientes regulados, com auditoria, rastreabilidade, integridade e suporte a decisões críticas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Global Navigation */}
      <nav className="bg-gray-900 text-white px-8 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">InvestigacaoForense.com</div>
          <ul className="flex gap-6 text-sm font-semibold items-center">
            <li><a href="/" className="hover:text-blue-400 transition">Início</a></li>
            <li><a href="/portfolio" className="hover:text-blue-400 transition">Portfólio</a></li>
            {/* Dropdown Soluções */}
            <li className="relative group">
              <button className="hover:text-blue-400 transition flex items-center gap-1">
                Soluções
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="absolute left-0 top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <a href="/plataforma-dados-criticos" className="block px-4 py-3 hover:bg-gray-700 hover:text-blue-400 transition rounded-t-lg">
                    📊 Plataforma de Dados
                  </a>
                </li>
                <li>
                  <a href="/solucoes" className="block px-4 py-3 hover:bg-gray-700 hover:text-blue-400 transition">
                    ⚙️ Soluções
                  </a>
                </li>
                <li>
                  <a href="/aplicacoes" className="block px-4 py-3 hover:bg-gray-700 hover:text-blue-400 transition rounded-b-lg">
                    🚀 Aplicações e MVPs
                  </a>
                </li>
              </ul>
            </li>
            <li><a href="/cursos" className="hover:text-blue-400 transition">Cursos</a></li>
            <li><a href="/servicos" className="hover:text-blue-400 transition">Serviços</a></li>
            <li><a href="/contato" className="hover:text-blue-400 transition">Contato</a></li>
          </ul>
        </div>
      </nav>
      <body className="antialiased bg-black">
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
