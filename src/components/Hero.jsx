import { Check, MessageCircle, Images } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Picture from './Picture'
import { hero, images, whatsappUrl } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-ink text-white">
      <Picture
        image={images.hero}
        sizes="100vw"
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_55%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/80 to-ink/35" />

      <Container className="pt-14 pb-28 sm:pt-16">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-2.5 text-[11px] font-extrabold tracking-[0.17em] text-sky-200">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-sky-300" />
          {hero.eyebrow}
        </p>
        <h1 id="titulo-principal" className="mt-6 mb-5 max-w-3xl text-[clamp(2.4rem,6.3vw,4.75rem)] leading-[1.03] font-extrabold tracking-tighter">
          {hero.titleLine1}
          <span className="block text-sky-300">{hero.titleLine2}</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">{hero.lead}</p>

        <div className="mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
          <Button href={whatsappUrl()} external className="ring-1 ring-white/30">
            <MessageCircle size={19} aria-hidden="true" /> {hero.primaryCta}
          </Button>
          <Button href="#trabajos" variant="ghost">
            <Images size={19} aria-hidden="true" /> {hero.secondaryCta}
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-100">
          {hero.points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <Check size={17} className="text-sky-300" aria-hidden="true" /> {p}
            </li>
          ))}
        </ul>
      </Container>

      <div className="absolute inset-x-0 bottom-0 hidden sm:block" aria-hidden="true">
        <Container className="flex items-center gap-4 border-t border-white/25 py-4 text-[10px] font-bold tracking-[0.15em] text-slate-200">
          <span>{hero.footerLeft}</span>
          <span className="h-px w-14 bg-white/40" />
          <span>{hero.footerRight}</span>
        </Container>
      </div>
    </section>
  )
}
