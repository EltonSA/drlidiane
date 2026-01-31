import { howWeWorkSteps } from '../data/howWeWork'
import AnimateOnScroll from './AnimateOnScroll'

export default function HowWeWork() {
  const leftCards = howWeWorkSteps.slice(0, 2)
  const rightCards = howWeWorkSteps.slice(2, 4)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll variant="up">
          <p className="section-label text-center mb-4">Como trabalhamos?</p>
          <h2 className="heading-display text-center mb-4 text-white px-2">
            Veja como é fácil contar com a Dra. Lidiane!
          </h2>
          <div className="dotted-box-white max-w-2xl mx-auto mb-8 sm:mb-12 text-center px-2">
            <p className="font-sans text-slate-300 text-sm sm:text-base md:text-lg">
              É simples ser atendido.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 items-center">
          {/* Cards à esquerda */}
          <AnimateOnScroll variant="left" className="flex flex-col gap-6 order-2 lg:order-1" delay={100}>
            {leftCards.map((item) => (
              <div
                key={item.step}
                className="dotted-box flex flex-col text-left lg:text-right transition-transform duration-300 hover:border-gold/70"
              >
                <span className="font-serif font-bold text-gold text-3xl md:text-4xl mb-2">
                  {item.step}
                </span>
                <h3 className="font-serif font-semibold text-white text-lg mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </AnimateOnScroll>

          {/* Imagem no centro */}
          <AnimateOnScroll variant="scale" className="flex justify-center items-center order-1 lg:order-2" delay={150}>
            <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] mx-auto">
              <img
                src="/images/como-trabalhamos-centro.png"
                alt="Dra. Lidiane Perdigão - Atendimento humanizado em Direito Previdenciário"
                className="w-full h-auto object-contain animate-float-slow"
              />
            </div>
          </AnimateOnScroll>

          {/* Cards à direita */}
          <AnimateOnScroll variant="right" className="flex flex-col gap-6 order-3" delay={100}>
            {rightCards.map((item) => (
              <div
                key={item.step}
                className="dotted-box flex flex-col text-left lg:text-left transition-transform duration-300 hover:border-gold/70"
              >
                <span className="font-serif font-bold text-gold text-3xl md:text-4xl mb-2">
                  {item.step}
                </span>
                <h3 className="font-serif font-semibold text-white text-lg mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
