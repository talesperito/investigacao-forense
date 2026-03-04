import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import TopNav from '@/components/TopNav';
import GoogleTagManager from '@/components/GoogleTagManager';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const globalStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.investigacaoforense.com/#website',
      url: 'https://www.investigacaoforense.com',
      name: 'Investigação Forense',
      inLanguage: 'pt-BR',
      publisher: {
        '@id': 'https://www.investigacaoforense.com/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.investigacaoforense.com/#organization',
      name: 'Investigação Forense',
      url: 'https://www.investigacaoforense.com',
      description: 'Organização especializada em perícia forense e investigação digital.',
      logo: 'https://www.investigacaoforense.com/tales.PNG',
      sameAs: ['https://www.instagram.com/investigacao_forense'],
      founder: {
        '@id': 'https://www.investigacaoforense.com/#person-tales-vieira',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.investigacaoforense.com/#person-tales-vieira',
      name: 'Tales Vieira',
      url: 'https://www.investigacaoforense.com/portfolio',
      jobTitle: 'Perito e Professor',
      description: 'Perito forense, professor e especialista em investigação digital.',
      knowsAbout: ['Perícia Forense', 'Investigação Digital', 'Direito Digital'],
      image: 'https://www.investigacaoforense.com/tales.PNG',
      worksFor: {
        '@id': 'https://www.investigacaoforense.com/#organization',
      },
      sameAs: [
        'https://www.linkedin.com/in/peritotales',
        'https://www.youtube.com/@peritotales',
        'https://www.tiktok.com/@peritotales',
      ],
    },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Home' });

  return {
    title: t('heroTitle') + ' | Investigação Forense',
    description: t('heroSubtitle')
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  if (!routing.locales.includes(resolvedParams.locale as "en" | "pt")) {
    notFound();
  }

  const allMessages = await getMessages();

  // Only send layout-level namespaces to the client (~1.2 KiB instead of ~50 KiB).
  // Server Components (Footer, page.tsx, etc.) use getTranslations() server-side.
  // Page-specific client namespaces are provided via page-level NextIntlClientProvider.
  const layoutMessages = {
    TopNav: (allMessages as Record<string, unknown>).TopNav,
    CookieBanner: (allMessages as Record<string, unknown>).CookieBanner,
    LocaleSwitcher: (allMessages as Record<string, unknown>).LocaleSwitcher,
  };

  return (
    <html lang={resolvedParams.locale} className="bg-black">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalStructuredData) }}
        />
      </head>
      <body className="antialiased bg-black">
        <NextIntlClientProvider messages={layoutMessages}>
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
          <TopNav />
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
