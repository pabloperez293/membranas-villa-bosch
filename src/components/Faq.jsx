import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { faqs, whatsappUrl } from '../data/site'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="preguntas" aria-labelledby="titulo-faq" className="py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <SectionHeading kicker="PREGUNTAS FRECUENTES" id="titulo-faq">
            ¿Tenés dudas?<br />Hablemos claro.
          </SectionHeading>
          <p className="my-5 max-w-xs text-sm leading-7 text-slate-600">
            Si tu consulta es más específica, escribinos y te ayudamos a evaluar el próximo paso.
          </p>
          <a
            href={whatsappUrl('Hola, tengo una consulta sobre impermeabilización de techos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark hover:underline"
          >
            Hacer una consulta <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>

        <div className="border-t border-slate-300">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="border-b border-slate-300">
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-5 py-4 text-left text-sm font-bold"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={20} aria-hidden="true" className={`shrink-0 text-brand transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!isOpen}
                  className="pr-8 pb-5 text-sm leading-7 text-slate-600"
                >
                  {faq.a}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
