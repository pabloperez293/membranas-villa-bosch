import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Button from './Button'
import Picture from './Picture'
import { images, products, whatsappUrl } from '../data/site'

export default function Products() {
  return (
    <section id="productos" aria-labelledby="titulo-productos" className="overflow-hidden bg-ink py-16 text-white sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading kicker={products.kicker} id="titulo-productos" dark>
            {products.title}
          </SectionHeading>
          <p className="mt-5 text-base leading-8 text-slate-300">{products.text}</p>
          <ul className="my-7 grid gap-3">
            {products.list.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-100">
                <Check size={18} className="shrink-0 text-sky-300" aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
          <Button href={whatsappUrl(products.ctaMessage)} external className="ring-1 ring-white/30">
            {products.cta} <ArrowUpRight size={17} aria-hidden="true" />
          </Button>
          <p className="mt-4 text-xs text-slate-300">{products.note}</p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Picture
            image={images.materials}
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 448px, 90vw"
            className="h-[360px] w-full rounded-2xl object-cover sm:h-[460px]"
          />
          <div className="absolute bottom-4 left-4 flex max-w-[85%] items-center gap-3 rounded-xl bg-white p-3.5 text-slate-900 shadow-xl sm:-left-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand text-white" aria-hidden="true">
              <ShieldCheck size={20} />
            </span>
            <div>
              <strong className="block text-sm">{products.badgeTitle}</strong>
              <small className="text-xs text-slate-600">{products.badgeText}</small>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
