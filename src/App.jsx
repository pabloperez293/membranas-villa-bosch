import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Products from './components/Products'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// App solo compone secciones; los textos y datos viven en src/data/site.js
export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-brand"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <TrustStrip />
        <Services />
        <Products />
        <Work />
        <Testimonials />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
