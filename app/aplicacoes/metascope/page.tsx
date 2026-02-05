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

  const metascopeUrl = process.env.NEXT_PUBLIC_METASCOPE_URL || '#';

  const demoImages = useMemo(
    () => [
      {
        src: '/images/metascope/screenshot-1.png',
        alt: 'MetaScope - Tela de Upload',
        description:
          'Envio por arrastar/soltar e análise por link, com validações técnicas consolidadas.',
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
                  Análise técnico-forense de arquivos e links
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Verifique autenticidade, integridade e indícios de manipulação em minutos.
                </h1>

                <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
                  O MetaScope analisa imagens, vídeos e documentos, extraindo metadados e evidências técnicas,
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

      {/* Para quem é */}
      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold">Para quem é</h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              MetaScope é pensado para cenários onde evidência e confiança importam — com saída técnica clara e exportável.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
                  title: 'Perícia & Investigação',
                  desc: 'Validação técnica, integridade e triagem rápida de evidências.',
                },
                {
                  icon: <Gavel className="h-5 w-5 text-blue-700" />,
                  title: 'Jurídico',
                  desc: 'Apoio na análise técnica e documentação com relatório em PDF.',
                },
                {
                  icon: <Lock className="h-5 w-5 text-blue-700" />,
                  title: 'Segurança & Compliance',
                  desc: 'Identificação de riscos em arquivos e links suspeitos.',
                },
                {
                  icon: <Globe2 className="h-5 w-5 text-blue-700" />,
                  title: 'OSINT & Curiosos',
                  desc: 'Checagens técnicas quando dados (ex. GPS/EXIF) estão disponíveis.',
                },
              ].map((item, idx) => (
                <Reveal key={item.title} delayMs={80 + idx * 80}>
                  <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                        {item.icon}
                      </span>
                      <p className="font-extrabold text-slate-900">{item.title}</p>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-200/50 via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              k: 'Metadados & Evidência',
              title: 'Metadados e timestamps',
              desc: 'Extração de metadados disponíveis (EXIF) e timestamps para apoiar análise de criação/modificação.',
              icon: <FileText className="h-5 w-5 text-blue-700" />,
            },
            {
              k: 'Integridade',
              title: 'Hash SHA-256',
              desc: 'Cálculo de hash para verificação de integridade e rastreabilidade do arquivo analisado.',
              icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
            },
            {
              k: 'Indícios de IA',
              title: 'Detecção em camadas (score)',
              desc: 'Análise automatizada por camadas com score e justificativas técnicas. Resultados indicam sinais compatíveis, não garantias absolutas.',
              icon: <Sparkles className="h-5 w-5 text-blue-700" />,
            },
            {
              k: 'Geolocalização',
              title: 'GPS quando disponível',
              desc: 'Extração de coordenadas quando presentes nos metadados do arquivo (EXIF GPS).',
              icon: <Globe2 className="h-5 w-5 text-blue-700" />,
            },
          ].map((card, idx) => (
            <Reveal key={card.title} delayMs={60 + idx * 80}>
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100">
                    {card.icon}
                  </span>
                  <p className="text-sm font-semibold text-blue-700">{card.k}</p>
                </div>
                <h3 className="mt-3 text-xl font-extrabold">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Como funciona */}
      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold">Como funciona</h2>

            <div className="mt-6 relative">
              <div className="hidden md:block absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-blue-200 via-slate-200 to-blue-200" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { step: '1', title: 'Envie arquivo ou link', desc: 'Upload, drag & drop ou link direto.' },
                  { step: '2', title: 'Análise técnica automatizada', desc: 'Metadados, hash SHA-256 e detecção em camadas.' },
                  { step: '3', title: 'Exporte o relatório em PDF', desc: 'Achados e validações consolidados para documentação.' },
                ].map((s, idx) => (
                  <Reveal key={s.step} delayMs={80 + idx * 80}>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <div className="relative z-10 h-10 w-10 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20 flex items-center justify-center font-extrabold">
                        {s.step}
                      </div>
                      <p className="mt-4 font-extrabold text-slate-900">{s.title}</p>
                      <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
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
                  q: 'Quais arquivos e tamanhos são suportados?',
                  a: 'Imagens e vídeos até 100MB e documentos até 25MB. Envio por upload, arrastar/soltar ou link.',
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
                  q: 'Qual é o diferencial na análise de links?',
                  a: 'Você pode analisar links suspeitos sem abrir o conteúdo diretamente — reduzindo o risco de clique. O MetaScope avalia o link de forma segura e traz sinais de risco para apoiar sua decisão.',
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-center">Exemplos reais de análise</h2>
            <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
              Prints do fluxo e do painel de achados. (Os resultados variam conforme o arquivo e os metadados disponíveis.)
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
