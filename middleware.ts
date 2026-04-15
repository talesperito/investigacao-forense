import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const gonePaths = new Set([
  '/author/bruno-manoel',
  '/author/peritotales',
  '/category/medicinalegal',
  '/login',
  '/downloads',
  '/locais-simulados',
  '/tanatologia-e-medicina-legal-as-ciencias-que-envolvem-a-morte',
  '/cameras-de-seguranca-voce-pode-estar-sendo-filmado-sem-saber',
  '/quimica-forense-no-csi-a-ciencia-na-elucidacao-dos-crimes',
  '/investigacao-forense-nos-filmes-e-seriados-de-tv-mitos-ou-verdades',
  '/aprenda-mais-e-melhor-3-tecnicas-de-estudo-baseadas-em-neurociencia-para-potencializar-seu-aprendizado',
  '/pericias-em-automoveis-para-comprovacao-de-adulteracao-desvendando-golpes-e-protegendo-o-consumidor'
]);

const gonePrefixes = [
  '/blog',
  '/product-page',
];

function isGonePath(pathname: string) {
  if (gonePaths.has(pathname)) {
    return true;
  }

  return gonePrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/+$/, '') || '/';

  if (isGonePath(pathname)) {
    return new NextResponse('Gone', { status: 410 });
  }

  return intlMiddleware(request);
}

export const config = {
    matcher: ['/', '/(pt|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
