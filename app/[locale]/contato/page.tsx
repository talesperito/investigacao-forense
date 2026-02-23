'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function ContatoPage() {
  const t = useTranslations('Contact');

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    website: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      // GTM DataLayer Push
      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'form_submission_success',
          form_type: 'contato'
        });
      }

      setStatus('sucesso');
      setFormData({ nome: '', email: '', telefone: '', mensagem: '', website: '' });
    } catch {
      setStatus('erro');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t('heroTitle')}</h1>
          <p className="text-xl text-gray-300">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORMULÁRIO */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">{t('formTitle')}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t('namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                {/* Honeypot anti-spam (invisível para usuários reais) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'enviando'}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {status === 'enviando' ? t('sending') : t('submitButton')}
                </button>

                {status === 'sucesso' && (
                  <p className="text-green-400 text-center">{t('successMessage')}</p>
                )}
                {status === 'erro' && (
                  <p className="text-red-400 text-center">
                    {t('errorMessage')}
                  </p>
                )}
              </form>
            </div>

            {/* INFORMAÇÕES DE CONTATO */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{t('whatsappTitle')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('whatsappDesc')}
                </p>

                <a
                  href="https://wa.me/5531992419000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {t('whatsappButton')}
                </a>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{t('emailsTitle')}</h3>
                <div className="space-y-3">
                  <a href="mailto:talesperito@gmail.com" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    talesperito@gmail.com
                  </a>
                  <a
                    href="mailto:matheusvieira1204@gmail.com"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    matheusvieira1204@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{t('hoursTitle')}</h3>
                <p className="text-gray-300">
                  {t('hoursLine1')}
                  <br />
                  {t('hoursLine2')}
                  <br />
                  <span className="text-gray-400">{t('hoursLine3')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ADICIONAL */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
          <p className="text-gray-300 mb-8">{t('ctaSubtitle')}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {t('ctaPortfolio')}
            </Link>
            <Link
              href="/aplicacoes"
              className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              {t('ctaApps')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
