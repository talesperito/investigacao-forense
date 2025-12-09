import Link from 'next/link';
import { Linkedin, Instagram, Mail, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const talesLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/peritotales/', 
      label: 'LinkedIn Tales Vieira' 
    },
    { 
      icon: BookOpen, 
      href: 'https://talesvieira.substack.com/', 
      label: 'Substack Tales Vieira' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/investigacao_forense', 
      label: 'Instagram Tales Vieira' 
    },
  ];

  const matheusLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/matheusvieira-dev/', 
      label: 'LinkedIn Matheus Vieira' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/_matheus_vieira_', 
      label: 'Instagram Matheus Vieira' 
    },
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
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
              © {currentYear} Investigação Forense. Todos os direitos reservados.
            </p>
            <nav className="flex gap-6 text-sm">
              <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sobre
              </Link>
              <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors duration-200">
                Serviços
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
