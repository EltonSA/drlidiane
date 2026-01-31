import { getWhatsAppUrl } from '../config/contact'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] md:min-h-[90vh] flex flex-col pt-20 md:pt-24 pb-0 overflow-hidden bg-dark-900">
      {/* Subtle grid + gold watermark feel */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201, 169, 98, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201, 169, 98, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <div className="relative z-10 flex-grow flex items-center max-w-6xl mx-auto px-4 sm:px-6 w-full pb-4 sm:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left: text + CTAs - animação de entrada */}
          <div className="text-white order-2 lg:order-1 hero-entrance" style={{ animationDelay: '0.1s' }}>
            <p className="section-label mb-4">Direito Previdenciário</p>
            <h1 className="heading-display mb-4">
              Especialista em garantir seus direitos junto ao INSS
            </h1>
            <div className="dotted-box-white max-w-xl mb-6">
              <p className="font-sans text-slate-200 text-base md:text-lg leading-relaxed">
                Auditorias, orientações e estratégias personalizadas para você tomar decisões com segurança e tranquilidade. Atendimento humanizado e acompanhamento completo.
              </p>
            </div>
            <p className="font-sans text-gold text-sm md:text-base mb-8">
              Quer ver na prática?
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#servicos"
                className="group btn-gold inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 min-h-[48px] bg-gold hover:bg-gold-dark text-dark-900 font-sans text-sm sm:text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-900 hover:shadow-[0_8px_25px_rgba(201,169,98,0.35)]"
              >
                Descubra nossos serviços
                <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 min-h-[48px] border-2 border-gold/80 text-gold hover:bg-gold/10 font-sans text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-900"
              >
                Fale com um especialista
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden />
                <span>Atendimento humanizado</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden />
                <span>Especialista em INSS</span>
              </span>
            </div>
          </div>

          {/* Right: cutout image of Dra. Lidiane + badges ao redor - animação de entrada + float */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end lg:pr-0 xl:pr-4 items-end min-h-[280px] sm:min-h-[340px] md:min-h-[400px] hero-entrance" style={{ animationDelay: '0.35s' }}>
            {/* Frase por trás da imagem - menor e centralizada no mobile */}
            <div className="absolute top-0 left-0 right-0 sm:right-20 flex justify-center lg:justify-end lg:pr-4 xl:pr-8 z-0 pointer-events-none px-2">
              <p className="font-serif font-bold text-white/20 sm:text-white/25 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-center lg:text-right max-w-[240px] sm:max-w-[280px] md:max-w-sm lg:max-w-lg xl:max-w-xl animate-float-slow" style={{ animationDelay: '0.8s' }}>
                Seus direitos em primeiro lugar.
              </p>
            </div>

            <div className="relative z-10 w-full max-w-[280px] sm:max-w-md lg:max-w-3xl xl:max-w-[52rem] lg:translate-x-4 xl:translate-x-6 flex justify-center lg:justify-end">
              <div className="relative w-full">
                <img
                  src="/images/hero-dra.png"
                  alt="Dra. Lidiane Perdigão - Advogada especialista em Direito Previdenciário"
                  className="hero-image w-full object-contain object-bottom drop-shadow-2xl animate-float-slow"
                  loading="eager"
                />
                {/* Gradiente na base para suavizar o corte da imagem */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #0f0f0f 0%, #0f0f0f 20%, transparent 100%)',
                  }}
                  aria-hidden
                />
              </div>
            </div>

            {/* Badge: +500 Clientes - escondido em telas muito pequenas para não poluir */}
            <div className="absolute top-[38%] sm:top-[42%] right-0 lg:right-2 xl:right-4 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-white text-center shadow-lg min-w-[90px] sm:min-w-[120px] bg-[#c9a962] z-20 animate-float" style={{ animationDelay: '0.5s' }}>
              <p className="font-sans text-base sm:text-xl md:text-2xl font-bold leading-tight">+500</p>
              <p className="font-sans text-[9px] sm:text-[10px] md:text-xs font-normal mt-0.5">Clientes atendidos</p>
            </div>

            {/* Badge: Atendimento Humanizado - posição ajustada no mobile */}
            <div className="absolute bottom-20 sm:bottom-24 left-2 sm:left-4 lg:bottom-20 lg:left-0 xl:left-4 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-white text-center shadow-lg min-w-[90px] sm:min-w-[120px] bg-[#c9a962] z-20 animate-float" style={{ animationDelay: '1.2s' }}>
              <p className="font-sans text-sm sm:text-base md:text-lg font-bold leading-tight">Atendimento</p>
              <p className="font-sans text-[9px] sm:text-[10px] md:text-xs font-normal mt-0.5">Humanizado</p>
            </div>

            {/* Badge: +10 Anos - posição ajustada no mobile */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:right-0 xl:right-8 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-white text-center shadow-lg min-w-[100px] sm:min-w-[140px] bg-[#c9a962] z-20 animate-float" style={{ animationDelay: '1.8s' }}>
              <p className="font-sans text-lg sm:text-2xl md:text-3xl font-bold leading-tight">+10</p>
              <p className="font-sans text-[9px] sm:text-xs md:text-sm font-normal mt-0.5">Anos de experiência</p>
            </div>

          </div>
        </div>
      </div>

      {/* Brand bar: Dra. Lidiane Perdigão - animação de entrada + safe area */}
      <div className="relative z-10 w-full py-3 sm:py-4 px-4 sm:px-6 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-gold/90 hero-entrance" style={{ animationDelay: '0.6s' }}>
        <p className="text-center font-serif font-semibold text-dark-900 text-base sm:text-lg md:text-xl">
          Dra. Lidiane Perdigão
        </p>
      </div>
    </section>
  )
}
