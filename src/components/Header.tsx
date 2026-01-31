import { useState } from 'react'
import { getWhatsAppUrl } from '../config/contact'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Por que nós', href: '#por-que-nos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b-2 border-gold/50 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20 md:h-24">
        <a href="#" className="flex items-center gap-2 py-2 -my-2" aria-label="Dra. Lidiane Perdigão - Início">
          <img
            src="/logo/logotipo.png"
            alt="Dra. Lidiane Perdigão"
            className="h-8 sm:h-9 md:h-12 w-auto object-contain brightness-0 invert opacity-100 max-w-[140px] sm:max-w-none"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-200 hover:text-gold font-sans text-base font-medium transition-all duration-300 relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-right after:transition-transform duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden md:inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-dark-900 font-sans text-base font-semibold rounded-lg shadow-[0_0_20px_rgba(201,169,98,0.3)] hover:shadow-[0_0_24px_rgba(201,169,98,0.4)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-900"
          >
            Atendimento Online
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-3 -m-2 text-slate-300 hover:text-white active:text-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-gold/30 bg-dark-800/98 backdrop-blur-sm animate-fade-in" role="dialog" aria-label="Menu de navegação">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] flex flex-col gap-1" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-white active:text-gold font-sans font-medium py-3.5 px-2 rounded-lg min-h-[48px] flex items-center -mx-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-5 py-3.5 min-h-[48px] bg-gold hover:bg-gold-dark text-dark-900 font-sans text-sm font-semibold rounded-lg transition-colors"
            >
              Atendimento Online
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
