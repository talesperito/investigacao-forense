import type { Metadata } from 'next';
import {
  ArrowDownToLine,
  BookOpenCheck,
  CheckCircle2,
  Database,
  FileSearch,
  Fingerprint,
  FlaskConical,
  Network,
  Search,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

const ptPageUrl = 'https://www.investigacaoforense.com/manual-ferramentas-forenses';
const enPageUrl = 'https://www.investigacaoforense.com/en/forensic-tools-manual';
const ebookDownloadUrl = '/ebooks/manual-ferramentas-forenses.pdf';

type Locale = 'pt' | 'en';
type PageProps = {
  params: Promise<{ locale: string }>;
};

const icons = {
  MetaScope: ShieldCheck,
  ExifTool: FileSearch,
  'Maltego CE': Network,
  Autopsy: Database,
  Recuva: Search,
  'SIFT Workstation': TerminalSquare,
  IPED: Fingerprint,
};

const copy = {
  pt: {
    pageUrl: ptPageUrl,
    language: 'pt-BR',
    ogLocale: 'pt_BR',
    metaTitle: 'Manual de Ferramentas Forenses para Investigação Cibernética | Investigação Forense',
    metaDescription:
      'Ebook gratuito com tutoriais, fluxos de trabalho e exemplos práticos para Autopsy, Maltego, IPED, ExifTool, SIFT, Recuva e MetaScope.',
    ogTitle: 'Manual de Ferramentas Forenses para Investigação Cibernética',
    ogDescription:
      'Guia técnico gratuito em português para estudo e aplicação prática de ferramentas de perícia digital.',
    ogAlt: 'Manual de ferramentas forenses para investigação cibernética',
    schemaName: 'Ferramentas Forenses Aplicadas à Investigação Cibernética',
    schemaDescription:
      'Ebook técnico gratuito com tutoriais, fluxos de trabalho e exemplos práticos para ferramentas de perícia digital e investigação cibernética.',
    schemaGroup: 'Grupo de Estudos de Perícias e Investigações Digitais',
    badge: 'Ebook técnico gratuito',
    heroTitle: 'Manual de Ferramentas Forenses',
    heroDescription:
      'Um guia em português com tutoriais, fluxos de trabalho e exemplos práticos para aplicar ferramentas como Autopsy, Maltego, IPED, ExifTool, SIFT, Recuva e MetaScope em investigações digitais.',
    downloadLabel: 'Baixar manual gratuito',
    secondaryCta: 'Ver ferramentas abordadas',
    heroNote:
      'Material desenvolvido a partir de revisão bibliográfica e experimentação prática conduzida por integrantes do GEPID, com validação em laboratório e ambientes virtuais controlados.',
    ebookLabel: 'Ebook',
    coverTitle: 'Ferramentas Forenses Aplicadas à Investigação Cibernética',
    coverBullets: ['Tutoriais passo a passo', 'Estudos de caso simulados', 'Fluxos replicáveis em laboratório'],
    coverNote: 'Foco em perícia digital, investigação cibernética e auditoria de segurança.',
    proofCards: [
      {
        icon: FlaskConical,
        title: 'Validado em laboratório',
        description:
          'As ferramentas documentadas foram testadas em ambientes controlados para priorizar confiabilidade e aplicabilidade.',
        color: 'text-blue-700',
      },
      {
        icon: ShieldCheck,
        title: 'Linguagem técnica e didática',
        description: 'O manual conecta conceito, instalação, configuração, uso e interpretação dos resultados.',
        color: 'text-emerald-700',
      },
      {
        icon: Fingerprint,
        title: 'Foco em prática forense',
        description: 'O conteúdo foi estruturado para apoiar estudo, treinamento e consulta em investigação digital.',
        color: 'text-indigo-700',
      },
    ],
    contentEyebrow: 'Conteúdo do manual',
    contentTitle: 'O que você vai encontrar no ebook',
    contentDescription:
      'O material foi projetado como uma referência prática para quem precisa sair da descrição genérica das ferramentas e entender como elas entram em um fluxo real de análise.',
    learningBlocks: [
      'Descrição conceitual de cada ferramenta e seu papel na investigação digital.',
      'Instalação, configuração e uso prático em ambiente controlado.',
      'Fluxos de trabalho replicáveis para estudo, treinamento e aplicação profissional.',
      'Estudos de caso simulados para aproximar teoria, ferramenta e decisão técnica.',
    ],
    toolsEyebrow: 'Ferramentas abordadas',
    toolsTitle: 'Da coleta à análise de evidências digitais',
    toolsDescription:
      'A seleção reúne ferramentas consolidadas e recursos desenvolvidos para validação de documentos, metadados, recuperação, OSINT e processamento de evidências.',
    tools: [
      {
        name: 'MetaScope',
        tag: 'Validação digital',
        description: 'Identificação de fraudes, validação de documentos digitais e geração de relatórios técnicos.',
      },
      {
        name: 'ExifTool',
        tag: 'Metadados',
        description: 'Leitura, edição e remoção de metadados em arquivos digitais.',
      },
      {
        name: 'Maltego CE',
        tag: 'OSINT',
        description: 'Análise relacional, mineração de dados e investigação em fontes abertas.',
      },
      {
        name: 'Autopsy',
        tag: 'Imagens e discos',
        description: 'Análise de discos, imagens de dispositivos, arquivos deletados e sistemas de arquivos.',
      },
      {
        name: 'Recuva',
        tag: 'Recuperação',
        description: 'Recuperação de arquivos removidos em cenários de triagem e estudo controlado.',
      },
      {
        name: 'SIFT Workstation',
        tag: 'Ambiente forense',
        description: 'Distribuição Linux voltada para análise forense digital e resposta a incidentes.',
      },
      {
        name: 'IPED',
        tag: 'Processamento',
        description: 'Indexação, processamento e organização de grandes conjuntos de evidências digitais.',
      },
    ],
    audienceEyebrow: 'Para quem é',
    audienceTitle: 'Um material técnico para consulta e formação',
    audienceDescription:
      'O manual não tenta substituir protocolos institucionais ou formação especializada. Ele organiza o ponto de partida: ferramentas, procedimentos, cuidados e exemplos para estudo aplicado.',
    audience: [
      'Peritos, assistentes técnicos e profissionais que atuam com evidência digital.',
      'Estudantes de perícia, segurança da informação, computação e investigação cibernética.',
      'Profissionais jurídicos, compliance e auditoria que precisam compreender a prova digital.',
      'Docentes, pesquisadores e grupos de estudo interessados em ferramentas forenses aplicadas.',
    ],
    originEyebrow: 'Origem técnica',
    originTitle: 'Desenvolvido a partir de revisão e experimentação prática',
    originDescription:
      'O ebook nasceu no contexto do Grupo de Estudos de Perícias e Investigações Digitais, reunindo revisão bibliográfica, triagem de ferramentas usadas em investigações cibernéticas e auditorias de segurança, testes em laboratório e estruturação didática dos capítulos.',
    originCards: [
      {
        eyebrow: 'Coordenação técnica',
        title: 'Tales Giuliano Vieira',
        description: 'Perito, professor e pesquisador em perícia e investigação digital.',
      },
      {
        eyebrow: 'Grupo de estudo',
        title: 'GEPID',
        description: 'Grupo dedicado a perícias e investigações digitais aplicadas.',
      },
      {
        eyebrow: 'Aplicação',
        title: 'Investigação cibernética',
        description: 'Ferramentas testadas para estudo, triagem e análise técnica.',
      },
    ],
    faqTitle: 'Perguntas frequentes',
    faqItems: [
      {
        question: 'O manual é gratuito?',
        answer:
          'Sim. O ebook foi planejado como material técnico gratuito para apoiar estudo, treinamento e consulta inicial em ferramentas de perícia digital.',
      },
      {
        question: 'O material é para iniciantes ou profissionais?',
        answer:
          'A estrutura foi pensada para ser didática, mas com aplicação prática. Ele atende estudantes, profissionais em formação e equipes que precisam de guias rápidos para ferramentas consolidadas.',
      },
      {
        question: 'Os exemplos usam casos reais?',
        answer:
          'O material usa estudos de caso práticos e cenários simulados, preservando segurança, privacidade e controle metodológico.',
      },
      {
        question: 'O manual substitui uma perícia oficial?',
        answer:
          'Não. O ebook é material educacional e técnico. Em casos críticos, a análise deve seguir protocolos institucionais, cadeia de custódia e avaliação de profissional habilitado.',
      },
    ],
    finalTitle: 'Baixe gratuitamente o manual técnico',
    finalDescription:
      'Use o ebook como referência inicial para estudar ferramentas forenses, montar ambientes de teste e compreender fluxos práticos de investigação digital.',
  },
  en: {
    pageUrl: enPageUrl,
    language: 'en',
    ogLocale: 'en_US',
    metaTitle: 'Forensic Tools Manual for Cyber Investigations | Investigação Forense',
    metaDescription:
      'Free ebook with tutorials, workflows, and practical examples for Autopsy, Maltego, IPED, ExifTool, SIFT, Recuva, and MetaScope.',
    ogTitle: 'Forensic Tools Manual for Cyber Investigations',
    ogDescription:
      'A free technical guide in English for studying and applying digital forensics tools.',
    ogAlt: 'Forensic tools manual for cyber investigations',
    schemaName: 'Forensic Tools Applied to Cyber Investigations',
    schemaDescription:
      'Free technical ebook with tutorials, workflows, and practical examples for digital forensics and cyber investigation tools.',
    schemaGroup: 'Digital Forensics and Investigations Study Group',
    badge: 'Free technical ebook',
    heroTitle: 'Forensic Tools Manual',
    heroDescription:
      'A practical guide with tutorials, workflows, and examples for applying tools such as Autopsy, Maltego, IPED, ExifTool, SIFT, Recuva, and MetaScope in digital investigations.',
    downloadLabel: 'Download free manual',
    secondaryCta: 'View covered tools',
    heroNote:
      'Material developed from literature review and hands-on experimentation conducted by GEPID members, with validation in laboratory and controlled virtual environments.',
    ebookLabel: 'Ebook',
    coverTitle: 'Forensic Tools Applied to Cyber Investigations',
    coverBullets: ['Step-by-step tutorials', 'Simulated case studies', 'Replicable laboratory workflows'],
    coverNote: 'Focused on digital forensics, cyber investigations, and security auditing.',
    proofCards: [
      {
        icon: FlaskConical,
        title: 'Laboratory validated',
        description:
          'The documented tools were tested in controlled environments to prioritize reliability and practical applicability.',
        color: 'text-blue-700',
      },
      {
        icon: ShieldCheck,
        title: 'Technical and didactic language',
        description: 'The manual connects concepts, installation, configuration, usage, and result interpretation.',
        color: 'text-emerald-700',
      },
      {
        icon: Fingerprint,
        title: 'Focused on forensic practice',
        description: 'The content was structured to support study, training, and consultation in digital investigations.',
        color: 'text-indigo-700',
      },
    ],
    contentEyebrow: 'Inside the manual',
    contentTitle: 'What you will find in the ebook',
    contentDescription:
      'The material was designed as a practical reference for readers who need to move beyond generic tool descriptions and understand how each tool fits into a real analysis workflow.',
    learningBlocks: [
      'Conceptual description of each tool and its role in digital investigations.',
      'Installation, configuration, and practical use in controlled environments.',
      'Replicable workflows for study, training, and professional application.',
      'Simulated case studies connecting theory, tools, and technical decision-making.',
    ],
    toolsEyebrow: 'Covered tools',
    toolsTitle: 'From collection to digital evidence analysis',
    toolsDescription:
      'The selection brings together established tools and resources for document validation, metadata, recovery, OSINT, and evidence processing.',
    tools: [
      {
        name: 'MetaScope',
        tag: 'Digital validation',
        description: 'Fraud identification, digital document validation, and technical report generation.',
      },
      {
        name: 'ExifTool',
        tag: 'Metadata',
        description: 'Reading, editing, and removing metadata from digital files.',
      },
      {
        name: 'Maltego CE',
        tag: 'OSINT',
        description: 'Relationship analysis, data mining, and open-source investigation.',
      },
      {
        name: 'Autopsy',
        tag: 'Images and disks',
        description: 'Analysis of disks, device images, deleted files, and file systems.',
      },
      {
        name: 'Recuva',
        tag: 'Recovery',
        description: 'Recovery of deleted files in controlled study and triage scenarios.',
      },
      {
        name: 'SIFT Workstation',
        tag: 'Forensic environment',
        description: 'Linux distribution for digital forensics and incident response.',
      },
      {
        name: 'IPED',
        tag: 'Processing',
        description: 'Indexing, processing, and organizing large sets of digital evidence.',
      },
    ],
    audienceEyebrow: 'Who it is for',
    audienceTitle: 'A technical material for reference and training',
    audienceDescription:
      'The manual does not replace institutional protocols or specialized training. It organizes the starting point: tools, procedures, precautions, and examples for applied study.',
    audience: [
      'Forensic experts, technical assistants, and professionals who work with digital evidence.',
      'Students of forensics, information security, computing, and cyber investigations.',
      'Legal, compliance, and audit professionals who need to understand digital evidence.',
      'Teachers, researchers, and study groups interested in applied forensic tools.',
    ],
    originEyebrow: 'Technical origin',
    originTitle: 'Developed from review and hands-on experimentation',
    originDescription:
      'The ebook emerged in the context of the Digital Forensics and Investigations Study Group, combining literature review, triage of tools used in cyber investigations and security audits, laboratory testing, and didactic chapter structure.',
    originCards: [
      {
        eyebrow: 'Technical coordination',
        title: 'Tales Giuliano Vieira',
        description: 'Forensic expert, professor, and researcher in digital forensics and investigations.',
      },
      {
        eyebrow: 'Study group',
        title: 'GEPID',
        description: 'A group dedicated to applied digital forensics and investigations.',
      },
      {
        eyebrow: 'Application',
        title: 'Cyber investigation',
        description: 'Tools tested for study, triage, and technical analysis.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faqItems: [
      {
        question: 'Is the manual free?',
        answer:
          'Yes. The ebook was planned as a free technical resource to support study, training, and initial consultation on digital forensics tools.',
      },
      {
        question: 'Is the material for beginners or professionals?',
        answer:
          'The structure is didactic but practical. It serves students, professionals in training, and teams that need quick guides for established tools.',
      },
      {
        question: 'Do the examples use real cases?',
        answer:
          'The material uses practical case studies and simulated scenarios, preserving security, privacy, and methodological control.',
      },
      {
        question: 'Does the manual replace an official forensic examination?',
        answer:
          'No. The ebook is educational and technical material. Critical cases must follow institutional protocols, chain of custody, and qualified professional assessment.',
      },
    ],
    finalTitle: 'Download the technical manual for free',
    finalDescription:
      'Use the ebook as an initial reference to study forensic tools, build test environments, and understand practical digital investigation workflows.',
  },
} satisfies Record<Locale, {
  pageUrl: string;
  language: string;
  ogLocale: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogAlt: string;
  schemaName: string;
  schemaDescription: string;
  schemaGroup: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  downloadLabel: string;
  secondaryCta: string;
  heroNote: string;
  ebookLabel: string;
  coverTitle: string;
  coverBullets: string[];
  coverNote: string;
  proofCards: Array<{
    icon: typeof FlaskConical;
    title: string;
    description: string;
    color: string;
  }>;
  contentEyebrow: string;
  contentTitle: string;
  contentDescription: string;
  learningBlocks: string[];
  toolsEyebrow: string;
  toolsTitle: string;
  toolsDescription: string;
  tools: Array<{
    name: keyof typeof icons;
    tag: string;
    description: string;
  }>;
  audienceEyebrow: string;
  audienceTitle: string;
  audienceDescription: string;
  audience: string[];
  originEyebrow: string;
  originTitle: string;
  originDescription: string;
  originCards: Array<{
    eyebrow: string;
    title: string;
    description: string;
  }>;
  faqTitle: string;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  finalTitle: string;
  finalDescription: string;
}>;

function getLocale(locale: string): Locale {
  return locale === 'en' ? 'en' : 'pt';
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[getLocale(locale)];

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: t.pageUrl,
      languages: {
        'pt-BR': ptPageUrl,
        en: enPageUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: t.ogLocale,
      url: t.pageUrl,
      title: t.ogTitle,
      description: t.ogDescription,
      siteName: 'Investigação Forense',
      images: [
        {
          url: 'https://www.investigacaoforense.com/tales.PNG',
          width: 1200,
          height: 630,
          alt: t.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.metaDescription,
      images: ['https://www.investigacaoforense.com/tales.PNG'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

function DownloadButton({
  label,
  variant = 'primary',
}: {
  label: string;
  variant?: 'primary' | 'light';
}) {
  const className =
    variant === 'light'
      ? 'inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-extrabold text-slate-950 shadow-lg shadow-black/10 transition hover:bg-slate-100'
      : 'inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-700/25 ring-1 ring-blue-500/40 transition hover:bg-blue-800';

  return (
    <a href={ebookDownloadUrl} download className={className}>
      {label}
      <ArrowDownToLine className="h-5 w-5" />
    </a>
  );
}

export default async function ManualFerramentasForensesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = copy[getLocale(locale)];

  const ebookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: t.schemaName,
    bookFormat: 'https://schema.org/EBook',
    inLanguage: t.language,
    url: t.pageUrl,
    isAccessibleForFree: true,
    description: t.schemaDescription,
    author: [
      {
        '@type': 'Person',
        name: 'Tales Giuliano Vieira',
      },
      {
        '@type': 'Organization',
        name: t.schemaGroup,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Investigação Forense',
      url: 'https://www.investigacaoforense.com',
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ebookSchema) }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.92)), radial-gradient(circle at 78% 20%, rgba(14, 165, 233, 0.28), transparent 34%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-100">
              <BookOpenCheck className="h-4 w-4" />
              {t.badge}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-normal md:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {t.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DownloadButton label={t.downloadLabel} />
              <a
                href="#ferramentas"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base font-extrabold text-white transition hover:bg-white/10"
              >
                {t.secondaryCta}
              </a>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300">{t.heroNote}</p>
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="rounded-[24px] border border-blue-200/20 bg-slate-950 p-7">
                <p className="text-sm font-bold uppercase text-blue-200">{t.ebookLabel}</p>
                <h2 className="mt-4 text-3xl font-black leading-tight">{t.coverTitle}</h2>
                <div className="mt-8 space-y-3 text-sm text-slate-300">
                  {t.coverBullets.map((item) => (
                    <p key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl border border-blue-300/20 bg-blue-300/10 p-4 text-sm text-blue-100">
                  {t.coverNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.proofCards.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <Icon className={`h-8 w-8 ${color}`} />
              <h2 className="mt-5 text-xl font-black">{title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-blue-700">{t.contentEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{t.contentTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{t.contentDescription}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {t.learningBlocks.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-700" />
                <p className="text-base font-semibold leading-relaxed text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ferramentas" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-blue-700">{t.toolsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{t.toolsTitle}</h2>
          </div>
          <p className="max-w-xl leading-relaxed text-slate-600">{t.toolsDescription}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.tools.map(({ name, tag, description }) => {
            const Icon = icons[name];

            return (
              <article
                key={name}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {name === 'MetaScope' ? (
                    <Link href="/aplicacoes/metascope" className="text-blue-800 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700">
                      MetaScope
                    </Link>
                  ) : (
                    name
                  )}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-bold uppercase text-blue-200">{t.audienceEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{t.audienceTitle}</h2>
            <p className="mt-4 leading-relaxed text-slate-300">{t.audienceDescription}</p>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {t.audience.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold leading-relaxed text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-blue-700">{t.originEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{t.originTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{t.originDescription}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.originCards.map((card) => (
              <div key={card.title} className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase text-slate-500">{card.eyebrow}</p>
                <h3 className="mt-3 text-xl font-black">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">{t.faqTitle}</h2>
          <div className="mt-8 grid gap-4">
            {t.faqItems.map((item) => (
              <article key={item.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="overflow-hidden rounded-[32px] bg-blue-700 text-white shadow-xl shadow-blue-900/20">
          <div className="grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-black md:text-4xl">{t.finalTitle}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-50">{t.finalDescription}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <DownloadButton label={t.downloadLabel} variant="light" />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={ebookDownloadUrl}
          download
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3 font-extrabold text-white shadow-lg shadow-blue-700/25"
        >
          {t.downloadLabel}
          <ArrowDownToLine className="h-5 w-5" />
        </a>
      </div>
    </main>
  );
}
