import { useState } from 'react'
import type { ServiceItem } from '../data/services'
import { getWhatsAppUrl } from '../config/contact'

interface ServiceCardProps {
  service: ServiceItem
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-gold/30 transition-all duration-500 ease-out hover:border-gold/60 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:scale-[1.03] min-h-[420px]"
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro para legibilidade do texto (padrão Instagram) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/60"
        aria-hidden
      />

      {/* Conteúdo por cima da imagem */}
      <div className="relative z-10 flex flex-col flex-grow p-4 sm:p-6 justify-end min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
        <div className="mt-auto">
          <p className="section-label mb-1 text-gold">{service.title}</p>
          <p className="font-sans text-white text-base font-medium mb-3 drop-shadow-md">
            {service.subtitle}
          </p>

          {expanded && (
            <div className="mb-4 pl-3 border-l-2 border-gold">
              <p className="font-sans text-xs font-semibold text-gold mb-1">Inclui:</p>
              <ul className="font-sans text-xs text-white/90 space-y-0.5 list-none">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5" aria-hidden>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center justify-center px-3 py-2.5 min-h-[44px] border border-gold/80 text-gold hover:bg-gold/20 font-sans text-xs font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {expanded ? 'Ver menos' : 'Saiba mais'}
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2.5 min-h-[44px] bg-gold hover:bg-gold-dark text-dark-900 font-sans text-xs font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Fale com a advogada
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
