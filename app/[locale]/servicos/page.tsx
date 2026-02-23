import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Services' });
  return {
    title: t('pageTitle') + ' | Investigação Forense',
    description: t('pageSubtitle'),
  };
}

export default function ServicosPage() {
  const t = useTranslations('Services');

  const steps = [
    { title: t('step1Title'), text: t('step1Text') },
    { title: t('step2Title'), text: t('step2Text') },
    { title: t('step3Title'), text: t('step3Text') },
  ];

  const deliveryModels = [
    { name: t('model1Name'), when: t('model1When'), includes: [t('model1Include1'), t('model1Include2'), t('model1Include3')], cta: t('model1Cta') },
    { name: t('model2Name'), when: t('model2When'), includes: [t('model2Include1'), t('model2Include2'), t('model2Include3')], cta: t('model2Cta') },
    { name: t('model3Name'), when: t('model3When'), includes: [t('model3Include1'), t('model3Include2'), t('model3Include3')], cta: t('model3Cta') },
    { name: t('model4Name'), when: t('model4When'), includes: [t('model4Include1'), t('model4Include2'), t('model4Include3')], cta: t('model4Cta') },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section className="px-4 md:px-8 py-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t('pageTitle')}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          {t('pageSubtitle')}
        </p>
      </section>

      <section className="px-4 md:px-8 py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
              <h2 className="text-xl font-bold text-white mb-3">{step.title}</h2>
              <p className="text-gray-300 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('chooseModelTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryModels.map((model) => (
              <article
                key={model.name}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-lg flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{model.name}</h3>
                <p className="text-blue-300 font-semibold mb-4">{t('model1WhenLabel')}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{model.when}</p>

                <p className="text-white font-semibold mb-3">{t('model1IncludesLabel')}</p>
                <ul className="space-y-2 mb-8">
                  {model.includes.map((item) => (
                    <li key={item} className="text-gray-300">
                      - {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contato"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mt-auto"
                >
                  {model.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-4xl mx-auto rounded-xl border border-blue-700 bg-gradient-to-r from-blue-950 to-blue-900 p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('guidanceTitle')}</h2>
          <p className="text-white/90 mb-8">
            {t('guidanceDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-bold transition-colors duration-200 inline-block"
            >
              {t('guidanceCta1')}
            </Link>
            <Link
              href="/aplicacoes"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-bold transition-all duration-200 inline-block"
            >
              {t('guidanceCta2')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
