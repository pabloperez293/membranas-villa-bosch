import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Instagram, PlayCircle, ArrowUpRight, Quote } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { site, testimonials } from '../data/site'

// Carrusel accesible: botones anterior/siguiente, puntos, deslizar con el dedo y sin movimiento automático.
// Con una sola opinión se muestra fija y los controles se ocultan.
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const touchX = useRef(null)
  const total = testimonials.length
  const multiple = total > 1

  const go = (next) => setIndex((next + total) % total)

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
  }

  return (
    <section id="opiniones" aria-labelledby="titulo-opiniones" className="pb-16 sm:pb-24">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <SectionHeading kicker="OPINIONES DE CLIENTES" id="titulo-opiniones" className="mb-6">
            Lo que cuentan quienes ya trabajaron con nosotros.
          </SectionHeading>

          <div
            role="region"
            aria-roledescription="carrusel"
            aria-label="Opiniones de clientes"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={onTouchEnd}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${index * 100}%)` }}
                aria-live={multiple ? 'polite' : 'off'}
              >
                {testimonials.map((t, i) => (
                  <figure
                    key={t.quote}
                    role="group"
                    aria-roledescription="diapositiva"
                    aria-label={`${i + 1} de ${total}`}
                    aria-hidden={i !== index}
                    inert={i !== index ? '' : undefined}
                    className="m-0 flex w-full shrink-0 gap-4"
                  >
                    <Quote size={36} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <blockquote className="m-0 text-base leading-8 font-semibold sm:text-lg">“{t.quote}”</blockquote>
                      <figcaption className="mt-3 text-sm text-slate-600">{t.author}</figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            {multiple && (
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <button type="button" onClick={() => go(index - 1)} aria-label="Opinión anterior" className="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-800 hover:border-brand hover:text-brand">
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => go(index + 1)} aria-label="Opinión siguiente" className="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-800 hover:border-brand hover:text-brand">
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </div>
                <div className="flex gap-1" role="group" aria-label="Elegir opinión">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.quote}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Ir a la opinión ${i + 1}`}
                      aria-current={i === index}
                      className="grid size-8 place-items-center"
                    >
                      <span className={`block h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand' : 'w-2.5 bg-slate-300'}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-3.5 text-sm font-bold hover:border-brand hover:text-brand">
              <Instagram size={18} aria-hidden="true" /> Instagram <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-3.5 text-sm font-bold hover:border-brand hover:text-brand">
              <PlayCircle size={18} aria-hidden="true" /> TikTok <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
