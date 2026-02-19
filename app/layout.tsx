import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import TopNav from '@/components/TopNav';

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
      <body className="antialiased bg-black">
        <TopNav />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
