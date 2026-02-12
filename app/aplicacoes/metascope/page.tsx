'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Globe2,
  Gavel,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

function Reveal({
  children,
  delayMs = 0,
}: {
  children: React.ReactNode;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        'transition-all duration-500 will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export default function MetaScopePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(1);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const metascopeUrl = process.env.NEXT_PUBLIC_METASCOPE_URL || 'https://tally.so/r/lbrQ8p';

  const demoImages = useMemo(
    () => [
      {
        src: '/images/metascope/screenshot-1-v2.png',
        alt: 'MetaScope - Tela de Upload',
        description:
          'Painel principal unificado: escolha entre Validação Forense de Arquivos ou Análise de Ameaças Digitais.',
      },
      {
        src: '/images/metascope/screenshot-2.png',
        alt: 'MetaScope - Painel de Metadados',
        description:
          'Metadados e evidências técnicas: EXIF/timestamps, hash SHA-256 e conclusão pericial.',
      },
      {
        src: '/images/metascope/screenshot-3.png',
        alt: 'MetaScope - Detecção de IA',
        description:
          'Detecção de indícios de IA em camadas com score e justificativas técnicas.',
      },
      {
        src: '/images/metascope/screenshot-4.png',
        alt: 'MetaScope - Análise de Localização',
        description:
          'Extração de geolocalização quando disponível no arquivo (EXIF GPS) e visualização.',
      },
      {
        src: '/images/metascope/scan1.png',
        alt: 'MetaScope - ScamTrace Input',
        description:
          'Análise de Ameaças: cole links suspeitos para verificação segura antes de qualquer interação.',
      },
      {
        src: '/images/metascope/scan2.png',
        alt: 'MetaScope - Detecção Homográfica',
        description:
          'Alerta de Homografia (Punycode): detecta ataques onde domínios falsos usam caracteres visuais idênticos aos oficiais.',
      },
      {
        src: '/images/metascope/scan3.png',
        alt: 'MetaScope - Phishing em Print',
        description:
          'Análise de Prints (OCR): detecta phishing e engenharia social em capturas de mensagens (WhatsApp/SMS/E-mail).',
      },
    ],
    []
  );

  const changeImage = (nextIndex: number) => {
    setImgOpacity(0);
    window.setTimeout(() => {
      setCurrentImageIndex(nextIndex);
      setImgOpacity(1);
    }, 140);
  };

  const nextImage = () => changeImage((currentImageIndex + 1) % demoImages.length);
  const prevImage = () => changeImage((currentImageIndex - 1 + demoImages.length) % demoImages.length);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Subtle premium background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(800px circle at 18% 12%, rgba(37, 99, 235, 0.10), transparent 45%), radial-gradient(900px circle at 82% 22%, rgba(56, 189, 248, 0.08), transparent 40%)',
        }}
      />

      {/* HERO (agora full-width coerente com o resto) */}
      <div className="container mx-auto px-4 pt-10 pb-10">
        <Reveal>
          <div className="rounded-[32px] border border-slate-200 bg-white/80 backdrop-blur p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-semibold border border-blue-100 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                  <ShieldCheck className="h-4 w-4" />
                  Apoio à análise forense de arquivos e links
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Analise autenticidade, integridade e indícios de manipulação em minutos.
                </h1>

                <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
                  Ferramenta de apoio à decisão forense. O MetaScope analisa imagens, vídeos e documentos, extraindo metadados e evidências técnicas,
                  calculando hash <span className="font-semibold text-slate-800">SHA-256</span> e aplicando detecção de
                  indícios de IA em camadas. Ao final, gere um{' '}
                  <span className="font-semibold text-slate-800">relatório pericial em PDF</span>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={metascopeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex justify-center items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 text-white font-extrabold shadow-lg shadow-blue-700/25 ring-1 ring-blue-500/40 hover:shadow-xl hover:shadow-blue-700/30 hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                    aria-label="Solicitar acesso / Teste (vai para o login)"
                  >
                    Solicitar acesso / Teste
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="#exemplos"
                    className="inline-flex justify-center items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-slate-900 font-extrabold hover:bg-slate-50 hover:shadow-sm transition-all duration-200"
                  >
                    Ver exemplos reais
                  </a>
                </div>

                <div className="mt-6 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Limites atuais:</span>{' '}
                  imagens e vídeos até <span className="font-semibold text-slate-800">100MB</span> • documentos até{' '}
                  <span className="font-semibold text-slate-800">25MB</span> • envio por upload, arrastar/soltar ou link.
                </div>
              </div>

              {/* Right (card lateral para “preencher” largura e aumentar percepção premium) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-blue-700">Entrega e confiança</p>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                        <div>
                          <p className="font-extrabold">Relatório pericial em PDF</p>
                          <p className="text-sm text-slate-600">
                            Exportação com evidências, indicadores e achados consolidados.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                      <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-blue-700 mt-0.5" />
                        <div>
                          <p className="font-extrabold">Foco em privacidade</p>
                          <p className="text-sm text-slate-600">
                            Processamento ocorre no navegador; arquivos não são armazenados em servidor.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-blue-700 mt-0.5" />
                        <div>
                          <p className="font-extrabold">Acesso controlado</p>
                          <p className="text-sm text-slate-600">
                            Contas criadas manualmente para teste e validação (sem cadastro público).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                    <p className="font-extrabold">Nota técnica</p>
                    <p className="mt-1">
                      Resultados automatizados indicam sinais/indícios com base em evidências técnicas e podem não ser 100% conclusivos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      {/* Escolha uma ferramenta */}
      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold">Escolha uma ferramenta</h2>
            <p className="mt-3 text-base md:text-lg text-slate-600 max-w-5xl">
              Validação forense de arquivos e análise de links ou prints para identificar golpes e ameaças digitais.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {/* Card 1: Arquivos */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    🔎
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Análise Forense de Arquivos</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Autenticidade e integridade: metadados, hash SHA-256 e detecção de indícios de IA em camadas, com relatório pericial em PDF.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  <p className="font-extrabold">Privacidade preservada</p>
                  <p className="mt-1">
                    Processamento totalmente local no seu navegador. Seus arquivos <span className="font-semibold">nunca</span> são enviados para a nuvem.
                  </p>
                </div>

                <ul className="mt-4 space-y-2.5 leading-relaxed text-sm md:text-base text-slate-700">
                  <li>• Imagens (JPG, PNG, WEBP) e vídeos (MP4, MOV, AVI) — até 100MB</li>
                  <li>• Documentos (PDF, DOCX, XLSX) — até 25MB</li>
                  <li>• EXIF/timestamps + hash SHA-256 (integridade)</li>
                  <li>• Detecção em camadas + exportação de relatório em PDF</li>
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={metascopeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white font-extrabold ring-1 ring-black/5 shadow-lg shadow-blue-700/25 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    Iniciar análise de arquivos
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  * Resultados automatizados indicam sinais/indícios com base em evidências técnicas e podem não ser 100% conclusivos.
                </p>
              </div>

              {/* Card 2: Ameaças */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                    🛡️
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Análise de Ameaças Digitais</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Cole um link suspeito ou envie um print (OCR): detecte phishing, homografia/typosquatting e táticas de engenharia social — <span className="font-semibold">sem risco de clique</span>.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  <p className="font-extrabold">Modo seguro (recomendado)</p>
                  <p className="mt-1">
                    Recomendação: <span className="font-semibold">não abra</span> links suspeitos. Copie o endereço (sem clicar) ou envie um print para análise.
                  </p>
                </div>

                <ul className="mt-4 space-y-2.5 leading-relaxed text-sm md:text-base text-slate-700">
                  <li>• Verificação de domínios: homografia (IDN) e typosquatting</li>
                  <li>• Análise por link: sinais de risco e recomendações (“não interagir”)</li>
                  <li>• Upload de print com OCR para extrair conteúdo e links</li>
                  <li>• Corroboração por fontes externas (ex.: VirusTotal) quando disponível</li>
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={metascopeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-white font-extrabold ring-1 ring-black/5 shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    Verificar link / print suspeito
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  * Use a análise como apoio. Em situações críticas, confirme por meios adicionais e evite qualquer interação com mensagens suspeitas.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Real Cases Section (Social Proof) */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Casos Investigados
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
                Casos reais, resultados comprovados
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Confira investigações onde o MetaScope foi decisivo. Exemplos práticos de como nossa tecnologia fundamenta laudos e detecta fraudes em cenários reais.
              </p>
            </div>
          </Reveal>

          {/* FEATURED CASE: Golpe Oficial de Justiça (Flow Completo) - SEPARADO DO GRID */}
          <div className="mb-16">
            <Reveal delayMs={100}>
              <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20">
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30 uppercase tracking-wide">
                    Fluxo Completo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30 uppercase tracking-wide">
                    Golpe Detectado
                  </span>
                </div>

                <div className="p-8 pb-2">
                  <div className="w-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Do recebimento ao laudo técnico
                    </h3>
                    <p className="text-slate-400 text-base mb-6 leading-relaxed">
                      Análise completa de golpe via WhatsApp. O sistema processa as evidências e entrega um <span className="text-slate-200 font-semibold">relatório pericial pronto para uso.</span>
                    </p>
                  </div>
                </div>

                <div className="mx-4 mb-4 p-4 rounded-2xl border border-slate-700 bg-slate-950/50 relative">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-48 md:h-64">
                    {/* Evidence 1 */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black/20 group/item">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white">1. EVIDÊNCIA</div>
                      <Image
                        src="/images/metascope/cases/Case1_Oficial-Justiça.png"
                        alt="Print conversa criminosa"
                        fill
                        className="object-contain p-1 opacity-80 group-hover/item:opacity-100 transition-opacity"
                      />
                    </div>
                    {/* Evidence 2 */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black/20 group/item">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white">2. DOCUMENTO</div>
                      <Image
                        src="/images/metascope/cases/Case1a_Oficial-justiça.jpg"
                        alt="Mandado falso recebido"
                        fill
                        className="object-contain p-1 opacity-80 group-hover/item:opacity-100 transition-opacity"
                      />
                    </div>
                    {/* Result */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 group/item">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg">3. ANÁLISE</div>
                      <Image
                        src="/images/metascope/cases/result_case1_.png"
                        alt="Dashboard com veredito"
                        fill
                        className="object-contain p-1 opacity-90 group-hover/item:opacity-100 transition-opacity"
                      />
                    </div>
                    {/* Report */}
                    <div className="relative rounded-xl overflow-hidden border border-blue-900/30 bg-blue-900/10 group/item shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                      <div className="absolute top-2 left-2 z-10 bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg">4. RELATÓRIO</div>
                      <Image
                        src="/images/metascope/cases/report_case1.png"
                        alt="Relatório PDF final"
                        fill
                        className="object-contain p-2 opacity-90 group-hover/item:opacity-100 transition-opacity scale-95 group-hover/item:scale-100 duration-300"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-xs font-semibold text-blue-200">Ciclo forense completo em minutos.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* MOSAICO DOS OUTROS CASOS (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case 3: Fraude Veicular (ATPV-e) */}
            <Reveal delayMs={150}>
              <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 h-full flex flex-col">
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30 uppercase tracking-wide">
                    Documento Adulterado
                  </span>
                </div>

                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    Fraude em ATPV-e
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Documento veicular digital com indícios de edição. Análise de metadados e estrutura PDF revelou manipulação.
                  </p>
                </div>

                <div className="mt-auto relative rounded-t-2xl overflow-hidden mx-4 mb-4 border border-slate-700 bg-slate-950">
                  <div className="grid grid-cols-2 h-64 md:h-72">
                    <div className="relative border-r border-slate-700 group/img bg-black/20">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white">EVIDÊNCIA</div>
                      <Image
                        src="/images/metascope/cases/Case3_ATPVe.png"
                        alt="ATPV-e suspeito"
                        fill
                        className="object-contain p-2 opacity-90 group-hover/img:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative group/res bg-slate-900/50">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg">ANÁLISE</div>
                      <Image
                        src="/images/metascope/cases/result_case3.png"
                        alt="Resultado fraude documento"
                        fill
                        className="object-contain object-top p-1 opacity-90 group-hover/res:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>

                  <div className="bg-red-900/20 p-3 border-t border-red-900/30 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-semibold text-red-200">
                      Veredito: Edição digital confirmada pós-assinatura.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>


            {/* Case 5: Deepfake Maduro */}
            <Reveal delayMs={200}>
              <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-900/20 h-full flex flex-col">
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 uppercase tracking-wide">
                    IA Detectada
                  </span>
                </div>

                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Viral: Real ou Fake?
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Imagem viral circulando em redes sociais globais. Análise técnica para identificar manipulação sintética.
                  </p>
                </div>

                <div className="mt-auto relative rounded-t-2xl overflow-hidden mx-4 mb-4 border border-slate-700 bg-slate-950">
                  <div className="grid grid-cols-2 h-64 md:h-72">
                    <div className="relative border-r border-slate-700 group/img bg-black/20">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white">EVIDÊNCIA</div>
                      <Image
                        src="/images/metascope/cases/Case5_maduro.jpg"
                        alt="Foto viral suspeita"
                        fill
                        className="object-contain p-2 opacity-90 group-hover/img:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative group/res bg-slate-900/50">
                      <div className="absolute top-2 left-2 z-10 bg-amber-600 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg">ANÁLISE</div>
                      <Image
                        src="/images/metascope/cases/result_case5.png"
                        alt="Resultado detecção de IA"
                        fill
                        className="object-contain object-top p-1 opacity-90 group-hover/res:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>

                  <div className="bg-amber-900/20 p-3 border-t border-amber-900/30 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-xs font-semibold text-amber-200">
                      Veredito: Fortes indícios de geração por IA.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Case 6: Pedido de Socorro (Fraude) */}
            <Reveal delayMs={300}>
              <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-900/20 h-full flex flex-col">
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/30 uppercase tracking-wide">
                    Phishing / Smishing
                  </span>
                </div>

                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Golpe do Rastreio Falso
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Mensagem sobre entrega retida ou taxa pendente. Análise técnica revelou link falso simulando site oficial.
                  </p>
                </div>

                <div className="mt-auto relative rounded-t-2xl overflow-hidden mx-4 mb-4 border border-slate-700 bg-slate-950">
                  <div className="grid grid-cols-2 h-64 md:h-72">
                    <div className="relative border-r border-slate-700 group/img bg-black/20">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white">EVIDÊNCIA</div>
                      <Image
                        src="/images/metascope/cases/Case6_print_whats_rastreio.png"
                        alt="Print pedido socorro"
                        fill
                        className="object-contain p-2 opacity-90 group-hover/img:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative group/res bg-slate-900/50">
                      <div className="absolute top-2 left-2 z-10 bg-orange-600 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg">ANÁLISE</div>
                      <Image
                        src="/images/metascope/cases/result_case6.png"
                        alt="Resultado análise link falso"
                        fill
                        className="object-contain object-left-top p-1 opacity-90 group-hover/res:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>

                  <div className="bg-orange-900/20 p-3 border-t border-orange-900/30 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-xs font-semibold text-orange-200">
                      Veredito: Link malicioso e tática de urgência.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Case 4: Autenticação Londres */}
            <Reveal delayMs={400}>
              <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/20 h-full flex flex-col">
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 uppercase tracking-wide">
                    Autêntico
                  </span>
                </div>

                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    Validação de Local
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Foto enviada por perito para validar álibi em Londres. Necessária confirmação de metadados e GPS original.
                  </p>
                </div>

                <div className="mt-auto relative rounded-t-2xl overflow-hidden mx-4 mb-4 border border-slate-700 bg-slate-950">
                  <div className="grid grid-cols-2 h-64 md:h-72">
                    <div className="relative border-r border-slate-700 group/img bg-black/20">
                      <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white">EVIDÊNCIA</div>
                      <Image
                        src="/images/metascope/cases/Case4_London.jpeg"
                        alt="Foto Londres original"
                        fill
                        className="object-contain p-2 opacity-90 group-hover/img:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative group/res bg-slate-900/50">
                      <div className="absolute top-2 left-2 z-10 bg-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg">ANÁLISE</div>
                      <Image
                        src="/images/metascope/cases/result_case4.png"
                        alt="Resultado validação GPS"
                        fill
                        className="object-contain object-top p-1 opacity-90 group-hover/res:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>

                  <div className="bg-emerald-900/20 p-3 border-t border-emerald-900/30 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-200">
                      Veredito: Autêntico. GPS e metadados confirmados.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold">Para quem é</h2>
            <p className="mt-3 text-base md:text-lg text-slate-600 max-w-4xl">
              MetaScope é projetado para cenários onde a integridade da prova é fundamental e a dúvida não é uma opção.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
                  bg: 'bg-blue-50',
                  title: 'Perícia Técnica',
                  desc: 'Triagem inicial de evidências, validação de integridade e suporte a laudos técnicos.',
                },
                {
                  icon: <Gavel className="h-6 w-6 text-indigo-600" />,
                  bg: 'bg-indigo-50',
                  title: 'Jurídico',
                  desc: 'Fundamentação técnica para peças jurídicas com relatórios exportáveis em PDF.',
                },
                {
                  icon: <Lock className="h-6 w-6 text-emerald-600" />,
                  bg: 'bg-emerald-50',
                  title: 'Segurança Corporativa',
                  desc: 'Análise de arquivos suspeitos e prevenção de fraudes ou vazamento de dados.',
                },
                {
                  icon: <Globe2 className="h-6 w-6 text-amber-600" />,
                  bg: 'bg-amber-50',
                  title: 'Jornalismo & Checagem',
                  desc: 'Verificação de autenticidade de mídias (fakes/IA) e validação de fontes.',
                },
              ].map((item, idx) => (
                <Reveal key={item.title} delayMs={80 + idx * 80}>
                  <div className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white hover:border-blue-200 transition-all duration-300">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 pb-16">
        <Reveal>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Tecnologia de ponta para revelar o invisível
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Transforme arquivos e links suspeitos em evidências técnicas claras com nosso motor de análise forense multi-camada.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              k: 'Proteção Antifraude',
              bg: 'bg-emerald-50',
              text: 'text-emerald-700',
              title: 'Análise de Riscos & Phishing',
              desc: 'Cole um link ou envie um print suspeito. Identifique indícios de sites falsos, homografia e táticas de engenharia social antes do clique.',
              icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
            },
            {
              k: 'Validação Pericial',
              bg: 'bg-blue-50',
              text: 'text-blue-700',
              title: 'Prova de Integridade',
              desc: 'Reforce a fundamentação técnica da sua evidência. Extração de metadados ocultos e cálculo de hash SHA-256 para validade jurídica.',
              icon: <FileText className="h-6 w-6 text-blue-600" />,
            },
            {
              k: 'Detector de Fakes',
              bg: 'bg-indigo-50',
              text: 'text-indigo-700',
              title: 'Detector de Deepfakes & IA',
              desc: 'Avalie a autenticidade. Nossa IA analisa padrões invisíveis e ruídos digitais para apontar probabilidade de manipulação sintética.',
              icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
            },
            {
              k: 'Rastreabilidade',
              bg: 'bg-amber-50',
              text: 'text-amber-700',
              title: 'Rastreio de Origem (GPS)',
              desc: 'Mapeie o local exato da captura. Visualização interativa de coordenadas GPS quando disponíveis nos metadados do arquivo.',
              icon: <Globe2 className="h-6 w-6 text-amber-600" />,
            },
          ].map((card, idx) => (
            <Reveal key={card.title} delayMs={60 + idx * 80}>
              <div className="group h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.bg} group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </span>
                  <p className={`text-sm font-bold uppercase tracking-wide ${card.text}`}>{card.k}</p>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Como funciona */}
      <div className="container mx-auto px-4 pb-16">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Como funciona</h2>

            <div className="relative">
              {/* Linha conectora (Desktop) */}
              <div className="hidden md:block absolute left-8 right-8 top-8 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-blue-500/20 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Envie ou Cole',
                    desc: 'Arraste seu arquivo ou cole o link suspeito. Sem instalações complexas, direto no navegador.'
                  },
                  {
                    step: '2',
                    title: 'Raio-X Automático',
                    desc: 'Nossos algoritmos varrem mais de 50 pontos de dados, metadados e indícios visuais em segundos.'
                  },
                  {
                    step: '3',
                    title: 'Relatório Pronto',
                    desc: 'Baixe um relatório PDF profissional e completo, pronto para anexar em processos ou dossiês.'
                  },
                ].map((s, idx) => (
                  <Reveal key={s.step} delayMs={80 + idx * 80}>
                    <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 h-full">
                      <div className="relative z-10 h-14 w-14 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center text-xl font-black mb-6 group-hover:scale-110 transition-transform">
                        {s.step}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-3">{s.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      {/* FAQ */}
      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold">FAQ</h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              Respostas diretas para as dúvidas mais comuns sobre análise, privacidade e interpretação dos resultados.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {[
                {
                  q: 'O MetaScope substitui uma perícia?',
                  a: 'Não. Ele é uma ferramenta de apoio técnico para triagem, validação e documentação. Em casos críticos, recomenda-se análise especializada complementar.',
                },
                {
                  q: 'Como analisar links com segurança (sem risco de clique)?',
                  a: 'Use o “modo seguro”: copie o endereço do link sem abrir (clique com o botão direito → “Copiar endereço do link”) e cole para análise. Alternativamente, envie um print da mensagem para OCR e avaliação. Isso reduz o risco de abrir conteúdo malicioso.',
                },
                {
                  q: 'O MetaScope “confirma” se algo foi feito por IA?',
                  a: 'Ele aponta indícios técnicos e fornece um score com justificativas. Como qualquer detecção automatizada, não é 100% conclusiva.',
                },
                {
                  q: 'O sistema guarda meus arquivos?',
                  a: 'Não. O processamento ocorre no navegador e não há armazenamento em servidor.',
                },
                {
                  q: 'A localização (GPS) sempre aparece?',
                  a: 'Não. A geolocalização só é exibida quando o arquivo contém EXIF GPS. Muitas plataformas removem metadados ao reprocessar imagens.',
                },
                {
                  q: 'O que é o hash SHA-256 e por que importa?',
                  a: 'É uma “impressão digital” do arquivo. Serve para verificar integridade e apoiar a rastreabilidade do material analisado.',
                },
                {
                  q: 'O que o MetaScope verifica em links e prints suspeitos?',
                  a: 'Ele busca sinais de phishing e fraude (ex.: homografia/IDN, typosquatting, urgência artificial e manipulação por engenharia social). Quando disponível, pode cruzar informações com fontes externas de reputação para corroboração.',
                },
                {
                  q: 'Como faço para obter acesso?',
                  a: 'O acesso é controlado (sem cadastro público no momento). Você solicita o teste e recebe credenciais para avaliação.',
                },
              ].map((item, idx) => {
                const isOpen = faqOpenIndex === idx;

                return (
                  <div
                    key={item.q}
                    className="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex((prev) => (prev === idx ? null : idx))}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04)] text-blue-700 font-extrabold">
                          ?
                        </span>
                        <span className="font-extrabold text-slate-900">{item.q}</span>
                      </div>

                      <span
                        className={[
                          'shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-transform duration-200',
                          isOpen ? 'rotate-45' : 'rotate-0',
                        ].join(' ')}
                        aria-hidden="true"
                      >
                        <span className="text-slate-700 text-xl leading-none">+</span>
                      </span>
                    </button>

                    <div
                      className={[
                        'grid transition-all duration-200 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-0 text-slate-600">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-extrabold">Transparência</p>
              <p className="mt-1">
                As análises automatizadas são baseadas em evidências técnicas e podem variar conforme o arquivo e os metadados disponíveis.
                Use os resultados como apoio e complemente quando necessário.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Gallery */}
      <div id="exemplos" className="container mx-auto px-4 pb-12">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center">Por dentro da plataforma</h2>
            <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
              Interface projetada para agilidade pericial. Navegue pelos dashboards, visualização de metadados e ferramentas de análise.
            </p>

            <div className="mt-8">
              <div className="relative w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-white/0 to-slate-900/5" />
                <div className="relative w-full h-80 md:h-[520px]">
                  <div className="absolute inset-0 transition-opacity duration-200" style={{ opacity: imgOpacity }}>
                    <Image
                      src={demoImages[currentImageIndex].src}
                      alt={demoImages[currentImageIndex].alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-800">{currentImageIndex + 1}</span> de{' '}
                  <span className="font-semibold text-slate-800">{demoImages.length}</span>
                </p>
                <p className="mt-2 text-lg md:text-xl font-extrabold text-slate-900">
                  {demoImages[currentImageIndex].description}
                </p>
              </div>

              <div className="mt-6 flex flex-col items-center gap-5">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevImage}
                    className="group p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-800 transition-transform group-hover:-translate-x-0.5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="group p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-800 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="flex gap-3 flex-wrap justify-center">
                  {demoImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => changeImage(index)}
                      className={[
                        'w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-200',
                        index === currentImageIndex
                          ? 'border-blue-500 ring-2 ring-blue-200 shadow-md'
                          : 'border-slate-200 opacity-80 hover:opacity-100 hover:shadow-sm',
                      ].join(' ')}
                      aria-label={`Selecionar imagem ${index + 1}`}
                    >
                      <Image src={image.src} alt={image.alt} width={64} height={64} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 pb-16">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-10 shadow-xl shadow-blue-700/20">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-extrabold">Quer testar com seu próprio material?</h2>
              <p className="mt-3 text-blue-100">
                O acesso é controlado (sem cadastro público). Clique abaixo para ir ao login e solicitar credenciais de teste.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={metascopeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-extrabold text-blue-700 hover:bg-blue-50 transition-all duration-200 shadow-md"
                >
                  Solicitar acesso / Teste
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#exemplos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-transparent px-7 py-4 font-extrabold text-white hover:bg-white/10 transition-all duration-200"
                >
                  Ver exemplos novamente
                </a>
              </div>

              <p className="mt-4 text-sm text-blue-100">
                Limites atuais: imagens/vídeos até <span className="font-semibold text-white">100MB</span> • documentos até{' '}
                <span className="font-semibold text-white">25MB</span>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Mobile sticky CTA (aumenta conversão; some no desktop) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 bg-white/85 backdrop-blur">
        <div className="px-4 py-3">
          <a
            href={metascopeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-white font-extrabold shadow-lg shadow-blue-700/25"
          >
            Solicitar acesso / Teste
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
