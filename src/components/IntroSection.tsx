import AnimateOnScroll from './AnimateOnScroll'

export default function IntroSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-dark-900 overflow-hidden">
      {/* Faixa dourada sutil no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Imagem: moldura com anel dourado e sombra */}
          <AnimateOnScroll variant="left" className="relative order-2 lg:order-1">
            <div className="relative inline-block w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold/40 to-gold/10 opacity-60 blur-xl" aria-hidden />
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-gold/80 to-gold/30 shadow-2xl">
                <img
                  src="/images/intro-dra.png"
                  alt="Dra. Lidiane Perdigão - Advogada especialista em Direito Previdenciário"
                  className="w-full rounded-xl object-contain object-center aspect-[3/4] bg-dark-800"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Texto: hierarquia clara e contraste alto */}
          <AnimateOnScroll variant="right" className="order-1 lg:order-2 space-y-6">
            <p className="section-label text-gold">A Dra. Lidiane</p>
            <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-xl">
              A Dra. Lidiane sabe do que você precisa!
            </h2>

            <blockquote className="pl-5 border-l-4 border-gold border-solid">
              <p className="font-sans text-slate-100 text-base md:text-lg leading-relaxed">
                Quando chega o momento de cuidar dos seus direitos previdenciários, é necessário contar com o apoio da profissional certa.
              </p>
            </blockquote>

            <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed">
              Trabalho com muita dedicação para resolver todas as pendências e solucionar todas as suas dúvidas junto ao INSS, com atendimento humanizado e transparência em cada etapa.
            </p>

            {/* Destaque em linha */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-gold/20 border border-gold/40 text-gold font-sans text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden />
                Atendimento humanizado
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-gold/20 border border-gold/40 text-gold font-sans text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold" aria-hidden />
                Especialista em INSS
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Linha dourada sutil no rodapé da seção */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" aria-hidden />
    </section>
  )
}
