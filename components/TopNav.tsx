'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function TopNav() {
  const t = useTranslations('TopNav');
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/aplicacoes', label: t('solutions') },
    { href: '/servicos', label: t('services') },
    { href: '/contato', label: t('contact') },
  ] as const;

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            InvestigacaoForense.com
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-semibold items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-4 border-l border-gray-700 pl-4">
              <LanguageSwitcher />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-700 hover:border-blue-500 hover:text-blue-300 transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 border-t border-gray-800 pt-3 space-y-3 pb-3">
            <ul className="flex flex-col gap-1 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-3 pt-2 border-t border-gray-800">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
