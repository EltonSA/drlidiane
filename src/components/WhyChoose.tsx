import { whyChooseItems } from '../data/whyChoose'
import AnimateOnScroll from './AnimateOnScroll'

const stats = [
  { value: 'Atendimento', label: 'humanizado' },
  { value: 'Especialista', label: 'em INSS' },
  { value: 'Acompanhamento', label: 'completo' },
  { value: 'Clareza', label: 'e transparência' },
]

export default function WhyChoose() {
  return (
    <section id="por-que-nos" className="py-12 sm:py-16 md:py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll variant="up">
          <div className="text-center mb-8 sm:mb-12">
            <p className="section-label mb-4">Qualidade Dra. Lidiane</p>
            <h2 className="heading-display mb-4 text-white px-2">
              Conheça o melhor da Dra. Lidiane
            </h2>
            <div className="dotted-box max-w-2xl mx-auto px-2">
              <p className="font-sans text-slate-300 text-sm sm:text-base md:text-lg">
                A qualidade de nossos serviços aliada ao atendimento humanizado faz da Dra. Lidiane uma referência em Direito Previdenciário. Use sua expertise em seu negócio e vida. Deixe o resto conosco.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {stats.map((item, index) => (
            <AnimateOnScroll key={item.value} variant="scale" delay={index * 60}>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-dark-700 border border-gold/40 transition-transform duration-300 hover:scale-105">
                <p className="font-serif font-bold text-gold text-base sm:text-xl md:text-2xl">{item.value}</p>
                <p className="font-sans text-slate-400 text-xs sm:text-sm">{item.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <AnimateOnScroll variant="left" className="order-2 lg:order-1">
            <div>
              <img
                src="/images/image3.png"
                alt="Dra. Lidiane Perdigão - Advogada Direito Previdenciário"
                className="w-full rounded-xl object-cover aspect-[4/3] border border-gold/30"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="right" className="order-1 lg:order-2 space-y-6">
            <div>
              {whyChooseItems.map((item) => (
                <div key={item.title} className="dotted-box-white">
                  <h3 className="font-serif font-semibold text-white text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
