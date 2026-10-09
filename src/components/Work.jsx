import { ArrowUpRight } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Picture from './Picture'
import { images, site, work } from '../data/site'

// Disposición: foto vertical grande a la izquierda y dos fotos apiladas a la derecha (escritorio).
const layout = [
  'h-[380px] sm:h-[460px] lg:row-span-2 lg:h-auto',
  'h-[240px] lg:h-auto',
  'h-[240px] lg:h-auto',
]
const sizes = [
  '(min-width: 1024px) 420px, 100vw',
  '(min-width: 1024px) 640px, 100vw',
  '(min-width: 1024px) 640px, 100vw',
]

export default function Work() {
  return (
    <section id="trabajos" aria-labelledby="titulo-trabajos" className="py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading kicker={work.kicker} id="titulo-trabajos">
            {work.title}
            <br />
            {work.titleLine2}
          </SectionHeading>
          <div className="max-w-sm">
            <p className="mb-3 text-sm leading-7 text-slate-600">{work.text}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark hover:underline"
            >
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>

        <div className="grid gap-3.5 lg:grid-cols-[1fr_1.4fr] lg:grid-rows-[260px_260px]">
          {work.items.map((item, i) => (
            <figure key={item.image} className={`group relative m-0 overflow-hidden rounded-xl bg-slate-200 ${layout[i]}`}>
              <Picture
                image={images[item.image]}
                sizes={sizes[i]}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5 text-white">
                <span className="text-[10px] font-extrabold tracking-[0.14em] text-sky-200">{item.label}</span>
                <strong className="text-base">{item.caption}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
