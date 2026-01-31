import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import HowWeWork from './components/HowWeWork'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-dark-900 focus:rounded-lg">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <IntroSection />
        <Services />
        <WhyChoose />
        <HowWeWork />
        <CTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}

export default App
