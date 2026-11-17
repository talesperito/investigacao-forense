'use client';

import { useSyncExternalStore, type ReactNode } from 'react';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { useTrackingUrlBuilder } from '@/lib/tracking-params';

const APP_URL = process.env.NEXT_PUBLIC_METASCOPE_URL || 'https://app.metascopeforense.com/';

type Variant = 'primary' | 'light' | 'ghost' | 'bar';

const variants: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-700/25 ring-1 ring-blue-500/40 transition hover:bg-blue-800',
  light:
    'inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-extrabold text-slate-950 shadow-lg shadow-black/10 transition hover:bg-slate-100',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-7 py-4 text-base font-extrabold text-white transition hover:bg-white/10',
  bar: 'inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 font-extrabold text-white shadow-lg shadow-blue-700/25',
};

type Tracker = {
  fbq?: (...args: unknown[]) => void;
  dataLayer?: Array<Record<string, unknown>>;
};

/**
 * Download do PDF com medicao do clique. O arquivo e servido direto de /public,
 * entao sem este evento nao ha como saber quantas visitas viraram download.
 */
export function GuideDownloadLink({
  href,
  label,
  locale,
  placement,
  variant = 'primary',
}: {
  href: string;
  label: string;
  locale: string;
  placement: string;
  variant?: Variant;
}) {
  const onClick = () => {
    const w = window as unknown as Tracker;
    try {
      w.fbq?.('trackCustom', 'GuideDownload', { content_name: 'guia-integridade-digital', locale, placement });
      w.dataLayer?.push({ event: 'guide_download', guide: 'guia-integridade-digital', locale, placement });
    } catch {
      // medicao nunca pode impedir o download
    }
  };

  return (
    <a href={href} download onClick={onClick} className={variants[variant]}>
      {label}
      <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

/**
 * Link para o app. Propaga fbclid/utm de entrada (mesmo mecanismo da LP). Visita
 * organica, sem utm_source, ganha uma origem propria para o cadastro poder ser
 * atribuido ao guia; visita paga mantem as utm da campanha.
 */
export function GuideAppLink({
  label,
  placement,
  variant = 'light',
  children,
}: {
  label: string;
  placement: string;
  variant?: Variant;
  children?: ReactNode;
}) {
  const withTracking = useTrackingUrlBuilder();
  // Servidor e hidratacao assumem "nao organico"; so depois da hidratacao le a query de verdade.
  const organic = useSyncExternalStore(
    () => () => {},
    () => !new URLSearchParams(window.location.search).has('utm_source'),
    () => false
  );

  const base = organic
    ? `${APP_URL}${APP_URL.includes('?') ? '&' : '?'}utm_source=investigacaoforense&utm_medium=site&utm_campaign=guia-integridade-digital&utm_content=${placement}`
    : APP_URL;

  return (
    <a href={withTracking(base)} target="_blank" rel="noopener noreferrer" className={variants[variant]}>
      {label}
      {children ?? <ArrowUpRight className="h-5 w-5" aria-hidden="true" />}
    </a>
  );
}
