import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import AnimateOnScroll from './AnimateOnScroll'

export default function Services() {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll variant="up">
          <p className="section-label text-center mb-4">Nossos serviços</p>
          <h2 className="heading-display text-center mb-4 text-white px-1">
            Direito previdenciário para crescer e proteger seus direitos
          </h2>
          <div className="dotted-box-white max-w-2xl mx-auto mb-8 sm:mb-10 text-center px-2">
            <p className="font-sans text-slate-300 text-sm sm:text-base md:text-lg">
              A Dra. Lidiane está disponível para ajudar você em cada etapa.
            </p>
          </div>
          <div className="flex justify-center mb-8 sm:mb-12">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-3.5 min-h-[48px] bg-gold hover:bg-gold-dark text-dark-900 font-sans text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              Fale com um especialista
            </a>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.id} variant="up" delay={index * 80}>
              <ServiceCard service={service} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
