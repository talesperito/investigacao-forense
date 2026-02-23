import Image from "next/image";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

function DemoSeal({ label }: { label: string }) {
  return (
    <div
      className="absolute top-3 right-3 z-10 flex flex-col items-center gap-0.5 pointer-events-none"
      title={label}
      aria-label={label}
    >
      <svg width="34" height="40" viewBox="0 0 44 52" role="img" aria-hidden="true" className="drop-shadow-[0_3px_8px_rgba(14,165,233,0.30)]">
        <defs><linearGradient id="demoShield" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#67e8f9" /><stop offset="100%" stopColor="#0284c7" /></linearGradient></defs>
        <path d="M22 2L38 8v13c0 11-7.2 20-16 23-8.8-3-16-12-16-23V8l16-6z" fill="url(#demoShield)" stroke="#e0f2fe" strokeWidth="1.5" />
        <circle cx="22" cy="21" r="9" fill="rgba(2,6,23,0.35)" />
        <path d="M18.5 21.2l2.6 2.8 4.4-5" fill="none" stroke="#ecfeff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[9px] leading-[1.05] text-cyan-200/90 font-semibold text-center tracking-[0.01em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
        {label}
      </span>
    </div>
  );
}

function CardCta({ href = "/contato", label }: { href?: string; label: string }) {
  return (
    <div className="mt-5 pt-3 border-t border-gray-700/70">
      <Link href={href as any} className="text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors">
        {label}
      </Link>
    </div>
  );
}

export default function PortfolioPage() {
  const t = useTranslations('Portfolio');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* HERO */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {t('heroDesc')}
            <br /><br />
            {t('heroSolutionsLink')}{" "}
            <Link href="/aplicacoes" className="underline underline-offset-4 decoration-gray-400 hover:decoration-blue-300 transition-colors">
              {t('heroSolutionsLinkText')}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TALES */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-blue-500">
                <Image src="/tales.PNG" fill alt="Tales Vieira" className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl font-bold text-white mb-2">Tales Vieira</h2>
              <p className="text-blue-400 font-semibold mb-4">{t('talesRole')}</p>
              <p className="text-gray-300 leading-relaxed">{t('talesBio1')}</p>
              <p className="text-gray-300 leading-relaxed">{t('talesBio2')}</p>
              <div className="pt-4">
                <a href="https://www.linkedin.com/in/peritotales/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                  {t('viewLinkedIn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATHEUS */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4 md:order-1 order-2">
              <h2 className="text-3xl font-bold text-white mb-2">Matheus Vieira</h2>
              <p className="text-blue-400 font-semibold mb-4">{t('matheusRole')}</p>
              <p className="text-gray-300 leading-relaxed">{t('matheusBio1')}</p>
              <p className="text-gray-300 leading-relaxed">{t('matheusBio2')}</p>
              <div className="pt-4">
                <a href="https://www.linkedin.com/in/matheusvieira-dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                  {t('viewLinkedIn')}
                </a>
              </div>
            </div>
            <div className="flex justify-center md:order-2 order-1">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-blue-500">
                <Image src="/matheus.jpg" fill alt="Matheus Vieira" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('projectsTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* BI */}
            <div className="order-9 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{t('biTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-yellow-600/20 text-yellow-400">{t('tagResearch')}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagForensicData')}</span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">{t('stageInternalProd')}</span>
              </div>
              <p className="text-gray-300 text-sm">
                {t('biDesc')}
                <br /><br />
                {t('biResult')}
                <br />
                <a href="https://link.springer.com/chapter/10.1007/978-3-032-05008-3_17" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {t('viewPublication')}
                </a>
              </p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* FaceID */}
            <div className="order-8 relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 pr-16">{t('faceidTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagAI')}</span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">{t('tagDigitalForensics')}</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stageAdvPilot')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('faceidDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* EvidenceOS */}
            <div className="order-5 relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <DemoSeal label={t('demoAvailable')} />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">{t('evidenceosTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">{t('tagForensicSoftware')}</span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">{t('tagTraceability')}</span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">{t('stageInternalProd')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('evidenceosDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* MetaScope */}
            <div className="order-1 relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <DemoSeal label={t('demoAvailable')} />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">{t('metascopeTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">{t('tagDigitalForensics')}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagEvidenceAnalysis')}</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stagePilotPartners')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('metascopeDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* CondoHub */}
            <div className="order-6 relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <DemoSeal label={t('demoAvailable')} />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">{t('condohubTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">{t('tagCorporate')}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">Compliance</span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">{t('stageProduction')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('condohubDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* ScamTrace */}
            <div className="order-7 relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <DemoSeal label={t('demoAvailable')} />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">{t('scamtraceTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagForensicInvestigation')}</span>
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">{t('tagEvidenceAnalysis')}</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stagePilotPartners')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('scamtraceDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* Document Analysis */}
            <div className="order-11 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{t('docAnalysisTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagForensicData')}</span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">{t('tagAutomation')}</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stageEarlyPilot')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('docAnalysisDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* Mobile Forensics */}
            <div className="order-10 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{t('mobileForensicsTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">{t('tagDigitalForensics')}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagEvidenceExtraction')}</span>
                <span className="text-xs px-2 py-1 rounded border border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-300 font-semibold">{t('stageRD')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('mobileForensicsDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* Platform */}
            <div className="order-12 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{t('platformTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-gray-600/20 text-gray-300">Forensic Data Platform</span>
                <span className="text-xs px-2 py-1 rounded border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 font-semibold">{t('stageProduction')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('platformDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* Inspecta */}
            <div className="order-2 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{t('inspectaTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">{t('tagDocSaaS')}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagIntegrity')}</span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">{t('tagAudit')}</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stageFinalDev')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('inspectaDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* SynapseOS */}
            <div className="order-3 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{t('synapseTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagAppliedAI')}</span>
                <span className="text-xs px-2 py-1 rounded bg-purple-600/20 text-purple-400">Machine Learning</span>
                <span className="text-xs px-2 py-1 rounded bg-cyan-600/20 text-cyan-300">{t('tagDocAnalysis')}</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stageAdvMVP')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('synapseDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

            {/* EcoCompliance */}
            <div className="order-4 relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col">
              <DemoSeal label={t('demoAvailable')} />
              <h3 className="text-xl font-bold text-white mb-2 pr-16">{t('ecoTitle')}</h3>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-400">{t('tagEnvSaaS')}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">{t('tagLicensing')}</span>
                <span className="text-xs px-2 py-1 rounded bg-emerald-600/20 text-emerald-300">ESG/Carbon</span>
                <span className="text-xs px-2 py-1 rounded border border-amber-400/30 bg-amber-500/15 text-amber-300 font-semibold">{t('stageMVPTest')}</span>
              </div>
              <p className="text-gray-300 text-sm">{t('ecoDesc')}</p>
              <div className="mt-auto"><CardCta label={t('requestDetails')} /></div>
            </div>

          </div>

          <p className="text-center text-gray-400 italic mt-12">{t('demoNote')}</p>
          <p className="text-center mt-4">
            <Link href="/aplicacoes" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              🚀 {t('viewAppsLink')}
            </Link>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <Link href="/plataforma-dados-criticos" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              → {t('dataPlatformLink')}
            </Link>
            <Link href="/aplicacoes" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              → {t('viewAppsLink2')}
            </Link>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">{t('seoTitle')}</h2>
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">{t('seoDesc')}</p>
        </div>
      </section>
    </main>
  );
}
