import { Metadata } from 'next';
import { Shield, Mail, MapPin, Globe, Clock, Lock, Eye, UserCheck, Trash2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Política de Privacidade | Privacy Policy | Investigação Forense',
    description: 'Política de Privacidade e Proteção de Dados - LGPD e GDPR. Saiba como coletamos, usamos e protegemos seus dados pessoais.',
};

export default function PoliticaDePrivacidade() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
                        <Shield className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Política de Privacidade
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Privacy Policy | Datenschutzerklärung
                    </p>
                    <p className="text-gray-500 text-sm mt-4">
                        Última atualização: Janeiro de 2026 | Last updated: January 2026
                    </p>
                </div>
            </section>

            {/* Language Toggle Info */}
            <section className="px-4 mb-8">
                <div className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <p className="text-sm text-gray-300">
                            <strong>🇧🇷 Português</strong> e <strong>🇬🇧 English</strong> - Role para ver ambas as versões
                        </p>
                    </div>
                </div>
            </section>

            {/* Portuguese Version */}
            <section className="px-4 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 md:p-12 space-y-10">

                        {/* PT - Header */}
                        <div className="border-b border-gray-700 pb-6">
                            <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                                🇧🇷 Versão em Português
                            </h2>
                        </div>

                        {/* PT - Introdução */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-400" />
                                1. Introdução
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                A <strong>Investigação Forense</strong>, com sede em Lavras/MG, Brasil, está comprometida
                                em proteger sua privacidade e seus dados pessoais. Esta Política de Privacidade explica
                                como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a
                                <strong> Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e o
                                <strong> Regulamento Geral sobre a Proteção de Dados (GDPR)</strong> da União Europeia.
                            </p>
                        </div>

                        {/* PT - Dados Coletados */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Eye className="w-5 h-5 text-blue-400" />
                                2. Dados que Coletamos
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Podemos coletar os seguintes tipos de dados pessoais:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong>Dados de Identificação:</strong> nome, e-mail, telefone (quando você preenche formulários de contato)
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong>Dados de Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência (coletados via cookies de análise)
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong>Dados de Interação:</strong> informações sobre cliques em links de redes sociais e interações com o site
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* PT - Finalidade */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-blue-400" />
                                3. Finalidade do Tratamento
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Utilizamos seus dados para:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Responder suas solicitações de contato
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Melhorar nossos serviços e a experiência do usuário
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Analisar estatísticas de acesso ao site (de forma anônima e agregada)
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Cumprir obrigações legais e regulatórias
                                </li>
                            </ul>
                        </div>

                        {/* PT - Cookies */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-400" />
                                4. Cookies e Tecnologias de Rastreamento
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Utilizamos cookies para:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Cookies Essenciais</h4>
                                    <p className="text-sm text-gray-400">
                                        Necessários para o funcionamento básico do site. Não requerem consentimento.
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Cookies de Análise</h4>
                                    <p className="text-sm text-gray-400">
                                        Google Analytics e similares. Ajudam a entender o comportamento dos visitantes.
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Cookies de Redes Sociais</h4>
                                    <p className="text-sm text-gray-400">
                                        LinkedIn, Instagram e outras plataformas podem coletar dados quando você interage com nossos botões sociais.
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Cookies de Marketing</h4>
                                    <p className="text-sm text-gray-400">
                                        Utilizados para campanhas publicitárias personalizadas (quando aplicável).
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-4">
                                Você pode gerenciar suas preferências de cookies a qualquer momento através do banner de cookies ou das configurações do seu navegador.
                            </p>
                        </div>

                        {/* PT - Direitos */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Lock className="w-5 h-5 text-blue-400" />
                                5. Seus Direitos (LGPD/GDPR)
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Você tem os seguintes direitos sobre seus dados pessoais:
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { title: 'Acesso', desc: 'Solicitar uma cópia dos seus dados' },
                                    { title: 'Correção', desc: 'Corrigir dados incompletos ou incorretos' },
                                    { title: 'Exclusão', desc: 'Solicitar a exclusão dos seus dados' },
                                    { title: 'Portabilidade', desc: 'Receber seus dados em formato legível' },
                                    { title: 'Revogação', desc: 'Retirar o consentimento a qualquer momento' },
                                    { title: 'Oposição', desc: 'Opor-se ao tratamento dos seus dados' },
                                ].map((right) => (
                                    <div key={right.title} className="flex items-start gap-3 bg-gray-700/20 rounded-lg p-3">
                                        <span className="text-blue-400 font-bold">→</span>
                                        <div>
                                            <strong className="text-white">{right.title}:</strong>
                                            <span className="text-gray-400 text-sm ml-1">{right.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PT - Retenção */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Trash2 className="w-5 h-5 text-blue-400" />
                                6. Retenção de Dados
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Seus dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as finalidades
                                descritas nesta política, ou conforme exigido por lei. Dados de navegação anônimos podem ser
                                mantidos por períodos mais longos para análises estatísticas.
                            </p>
                        </div>

                        {/* PT - Segurança */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-400" />
                                7. Segurança dos Dados
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais
                                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia,
                                controles de acesso e monitoramento contínuo.
                            </p>
                        </div>

                        {/* PT - Contato */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Mail className="w-5 h-5 text-blue-400" />
                                8. Contato do Encarregado (DPO)
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                            </p>
                            <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                    <span className="text-white font-semibold">Investigação Forense</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <a href="mailto:talesperito@gmail.com" className="text-blue-400 hover:underline">
                                        talesperito@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300">Lavras/MG, Brasil</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* English Version */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 md:p-12 space-y-10">

                        {/* EN - Header */}
                        <div className="border-b border-gray-700 pb-6">
                            <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                                🇬🇧 English Version
                            </h2>
                        </div>

                        {/* EN - Introduction */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-400" />
                                1. Introduction
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Investigação Forense</strong>, based in Lavras/MG, Brazil, is committed to protecting
                                your privacy and personal data. This Privacy Policy explains how we collect, use, store, and
                                protect your information, in compliance with the <strong>Brazilian General Data Protection Law
                                    (LGPD - Law No. 13.709/2018)</strong> and the <strong>European Union General Data Protection
                                        Regulation (GDPR)</strong>.
                            </p>
                        </div>

                        {/* EN - Data Collected */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Eye className="w-5 h-5 text-blue-400" />
                                2. Data We Collect
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We may collect the following types of personal data:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong>Identification Data:</strong> name, email, phone number (when you fill out contact forms)
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong>Navigation Data:</strong> IP address, browser type, pages visited, time spent (collected via analytics cookies)
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong>Interaction Data:</strong> information about clicks on social media links and website interactions
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* EN - Purpose */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-blue-400" />
                                3. Purpose of Processing
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We use your data to:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Respond to your contact requests
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Improve our services and user experience
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Analyze website access statistics (anonymously and aggregated)
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    Comply with legal and regulatory obligations
                                </li>
                            </ul>
                        </div>

                        {/* EN - Cookies */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-400" />
                                4. Cookies and Tracking Technologies
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We use cookies for:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                                    <p className="text-sm text-gray-400">
                                        Required for basic website functionality. Do not require consent.
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                                    <p className="text-sm text-gray-400">
                                        Google Analytics and similar. Help understand visitor behavior.
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Social Media Cookies</h4>
                                    <p className="text-sm text-gray-400">
                                        LinkedIn, Instagram and other platforms may collect data when you interact with our social buttons.
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                                    <p className="text-sm text-gray-400">
                                        Used for personalized advertising campaigns (when applicable).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* EN - Rights */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Lock className="w-5 h-5 text-blue-400" />
                                5. Your Rights (LGPD/GDPR)
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You have the following rights over your personal data:
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { title: 'Access', desc: 'Request a copy of your data' },
                                    { title: 'Rectification', desc: 'Correct incomplete or inaccurate data' },
                                    { title: 'Erasure', desc: 'Request deletion of your data' },
                                    { title: 'Portability', desc: 'Receive your data in a readable format' },
                                    { title: 'Withdrawal', desc: 'Withdraw consent at any time' },
                                    { title: 'Objection', desc: 'Object to the processing of your data' },
                                ].map((right) => (
                                    <div key={right.title} className="flex items-start gap-3 bg-gray-700/20 rounded-lg p-3">
                                        <span className="text-blue-400 font-bold">→</span>
                                        <div>
                                            <strong className="text-white">{right.title}:</strong>
                                            <span className="text-gray-400 text-sm ml-1">{right.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* EN - Contact */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Mail className="w-5 h-5 text-blue-400" />
                                6. Data Protection Officer Contact
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To exercise your rights or clarify questions about this policy, please contact:
                            </p>
                            <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                    <span className="text-white font-semibold">Investigação Forense</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <a href="mailto:talesperito@gmail.com" className="text-blue-400 hover:underline">
                                        talesperito@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300">Lavras/MG, Brazil</span>
                                </div>
                            </div>
                        </div>

                        {/* EN - Updates */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-blue-400" />
                                7. Policy Updates
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                                requirements. We recommend that you review this page regularly. Significant changes will be
                                notified through our website.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
