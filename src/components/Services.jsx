import { ArrowUpRight } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { iconMap } from './icons'
import { services, whatsappUrl } from '../data/site'

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="titulo-servicios" className="py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading kicker="QUÉ HACEMOS" id="titulo-servicios">
            Soluciones para cuidar <br className="hidden lg:block" />tu techo de verdad.
          </SectionHeading>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Te ayudamos a encontrar una solución adecuada para filtraciones, desgaste y mantenimiento. Cada techo es distinto: lo evaluamos antes de recomendarte.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <li key={s.title}>
                <article className="flex h-full min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand" aria-hidden="true">
                      <Icon size={25} />
                    </span>
                    <span className="text-xs font-extrabold text-slate-500" aria-hidden="true">0{i + 1}</span>
                  </div>
                  <span className="text-[10px] font-extrabold tracking-widest text-brand uppercase">{s.tag}</span>
                  <h3 className="mt-2 mb-2 text-lg leading-tight font-bold">{s.title}</h3>
                  <p className="mb-5 text-sm leading-7 text-slate-600">{s.description}</p>
                  <a
                    href={whatsappUrl(`Hola, quisiera consultar por: ${s.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark hover:underline"
                  >
                    Consultar por WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
                    <span className="sr-only"> sobre {s.title} (se abre en una pestaña nueva)</span>
                  </a>
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
