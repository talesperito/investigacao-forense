import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investigação Forense",
  description: "Perícia Criminal e Investigação Forense com Inteligência Artificial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navigation */}
        <nav className="bg-gray-900 text-white px-8 py-4 sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold">InvestigacaoForense.com</div>
            <ul className="flex gap-6 text-sm font-semibold">
              <li><a href="/" className="hover:text-blue-400 transition">Início</a></li>
              <li><a href="/blog" className="hover:text-blue-400 transition">Notícias/Matérias</a></li>
              <li><a href="/servicos" className="hover:text-blue-400 transition">Serviços</a></li>
              <li><a href="/cursos" className="hover:text-blue-400 transition">Cursos</a></li>
                               <li><a href="/landingpage" className="hover:text-blue-400 transition">Mentoria</a></li>
            <li><a href="/sobre" className="hover:text-blue-400 transition">Sobre</a></li>
            </ul>
          </div>
        </nav>
        {children}
                <Footer />
      </body>
    </html>
  );
}
