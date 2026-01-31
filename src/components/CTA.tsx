import { getWhatsAppUrl } from '../config/contact'
import AnimateOnScroll from './AnimateOnScroll'

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-dark-800">
      <AnimateOnScroll variant="up" className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="heading-display mb-4 text-white px-1">
          Agende uma consulta e tire suas dúvidas com segurança
        </h2>
        <div className="dotted-box-white max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="font-sans text-slate-300 text-sm sm:text-base md:text-lg">
            Atendimento humanizado e especializado em Direito Previdenciário. Garantimos clareza e acompanhamento completo no INSS.
          </p>
        </div>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group btn-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 min-h-[48px] bg-gold hover:bg-gold-dark text-dark-900 font-sans text-sm sm:text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-800 shadow-gold-lg"
        >
          Fale conosco agora mesmo
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </AnimateOnScroll>
    </section>
  )
}
