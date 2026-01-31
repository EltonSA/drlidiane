import { getWhatsAppUrl } from '../config/contact'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark-950 border-t border-dark-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-[calc(3rem+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <img
              src="/logo/logotipo.png"
              alt="Dra. Lidiane Perdigão"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="font-sans text-sm leading-relaxed text-white">
              A Dra. Lidiane Perdigão vem atendendo seus clientes com foco em Direito Previdenciário. Buscamos agilizar o acesso aos benefícios do INSS, com atendimento humanizado e acompanhamento completo.
            </p>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: '#c9a962' }}>Nossos Serviços</h3>
            <ul className="font-sans text-sm space-y-2 list-none">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#servicos" className="text-white hover:text-gold transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: '#c9a962' }}>A Dra. Lidiane</h3>
            <ul className="font-sans text-sm space-y-2 list-none">
              <li><a href="#por-que-nos" className="text-white hover:text-gold transition-colors">Por que nos escolher</a></li>
              <li><a href="#servicos" className="text-white hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-white hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: '#c9a962' }}>Contate-nos</h3>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-gold font-sans text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-950 rounded"
            >
              WhatsApp – Agende sua consulta
            </a>
            <p className="font-sans text-sm mt-3 text-white">
              Atendimento humanizado e especializado em Direito Previdenciário.
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-dark-600 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <p className="font-sans text-xs sm:text-sm order-2 sm:order-1" style={{ color: '#c9a962' }}>
            © {new Date().getFullYear()} Dra. Lidiane Perdigão. Todos os direitos reservados.
          </p>
          <div className="py-2 px-4 rounded-lg border border-gold/60 order-1 sm:order-2">
            <p className="font-serif font-semibold text-sm text-white">
              Dra. Lidiane Perdigão
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
