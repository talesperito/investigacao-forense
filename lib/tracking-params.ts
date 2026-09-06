'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Propagação de atribuição para app.metascopeforense.com.
 *
 * Cookies não atravessam domínios diferentes, então os identificadores de
 * clique do Meta precisam viajar na query string do link de destino.
 */

const CLICK_PARAMS = ['fbclid'] as const;
const UTM_PREFIX = 'utm_';

function readCookie(cookieString: string, name: string): string | null {
  for (const part of cookieString.split(';')) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    if (part.slice(0, eq).trim() !== name) continue;
    return decodeURIComponent(part.slice(eq + 1).trim()) || null;
  }
  return null;
}

/**
 * Monta a URL de destino. Função pura: recebe a query de entrada e os cookies
 * como argumentos, sem tocar em `window`, para poder rodar em qualquer contexto.
 *
 * Parâmetros já presentes na URL base têm precedência e nunca são sobrescritos.
 */
export function buildTrackingUrl(
  baseUrl: string,
  search: string,
  cookieString: string
): string {
  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return baseUrl;
  }

  const incoming = new URLSearchParams(search);

  const add = (key: string, value: string | null) => {
    if (!value) return;
    if (url.searchParams.has(key)) return;
    url.searchParams.set(key, value);
  };

  for (const key of CLICK_PARAMS) {
    add(key, incoming.get(key));
  }

  for (const [key, value] of incoming) {
    if (key.startsWith(UTM_PREFIX)) add(key, value);
  }

  add('fbc', readCookie(cookieString, '_fbc'));
  add('fbp', readCookie(cookieString, '_fbp'));

  return url.toString();
}

type TrackingSource = { search: string; cookies: string };

/**
 * Devolve um construtor de URLs de destino.
 *
 * Antes da hidratação o construtor é identidade, retornando a URL base tal como
 * o servidor a renderizou — isso evita hydration mismatch no atributo href.
 * Depois da hidratação passa a devolver a URL enriquecida.
 */
export function useTrackingUrlBuilder(): (baseUrl: string) => string {
  const [source, setSource] = useState<TrackingSource | null>(null);

  useEffect(() => {
    let attempts = 0;
    let timer: number | undefined;

    const compute = () => {
      const cookies = document.cookie;
      setSource({ search: window.location.search, cookies });

      // _fbc/_fbp só existem depois que o fbevents.js carrega pela rede, o que
      // acontece após este efeito. Relê algumas vezes até os cookies aparecerem.
      const haveBoth = readCookie(cookies, '_fbc') && readCookie(cookies, '_fbp');
      if (!haveBoth && attempts < 6) {
        attempts += 1;
        timer = window.setTimeout(compute, 500);
      }
    };

    compute();
    return () => window.clearTimeout(timer);
  }, []);

  return useCallback(
    (baseUrl: string) =>
      source ? buildTrackingUrl(baseUrl, source.search, source.cookies) : baseUrl,
    [source]
  );
}
