import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import { finalCta, whatsappUrl } from '../data/site'

export default function FinalCta() {
  return (
    <section aria-labelledby="titulo-cta" className="bg-brand py-14 text-white sm:py-16">
      <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-[11px] font-extrabold tracking-[0.17em] text-sky-200">{finalCta.kicker}</span>
          <h2 id="titulo-cta" className="mt-3.5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-extrabold tracking-tight">
            {finalCta.title}
            <br className="hidden sm:block" /> {finalCta.titleLine2}
          </h2>
          <p className="mt-4 text-base leading-7 text-sky-100">{finalCta.text}</p>
        </div>
        <Button href={whatsappUrl()} external variant="light" className="shrink-0">
          <MessageCircle size={20} aria-hidden="true" /> {finalCta.button} <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
      </Container>
    </section>
  )
}
