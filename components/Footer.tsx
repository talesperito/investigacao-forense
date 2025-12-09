import Link from 'next/link';
import { Linkedin, Instagram, Mail, BookOpen } from 'lucide-react';

export default function Footer() {
  const talesLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/peritotales/', label: 'LinkedIn' },
    { icon: BookOpen, href: 'https://talesvieira.substack.com/', label: 'Substack' },
    { icon: Instagram, href: 'https://www.instagram.com/investigacao_forense?igsh=MXZldjJhZ3RrcmF6ZQ%3D%3D&utm_source=qr', label: 'Instagram' },
  ];

  const matheusLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/matheusvieira-dev/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_matheus_vieira_?igsh=MW1iZHhmMnZ0NzlrOA==', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tales Vieira */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tales Vieira</h3>
            <p className="text-gray-400 text-sm mb-4">
              Data Science Specialist and Public Security Advisor
            </p>
            <div className="flex gap-4">
              {talesLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Matheus Vieira */}
          <div>
            <h3 className="text-xl font-bold mb-4">Matheus Vieira</h3>
            <p className="text-gray-400 text-sm mb-4">
              Full Stack Developer
            </p>
            <div className="flex gap-4">
              {matheusLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <Link
              href="mailto:talesperito@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">talesperito@gmail.com</span>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Investigação Forense. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/sobre" className="text-gray-400 hover:text-white transition">
                Sobre
              </Link>
              <Link href="/servicos" className="text-gray-400 hover:text-white transition">
                Serviços
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
