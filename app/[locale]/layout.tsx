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

  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale}>
      <body className="antialiased bg-black">
        <NextIntlClientProvider messages={messages}>
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
