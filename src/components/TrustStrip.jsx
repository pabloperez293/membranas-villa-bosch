import Container from './Container'
import { iconMap } from './icons'
import { trustItems } from '../data/site'

export default function TrustStrip() {
  return (
    <section aria-label="Cómo trabajamos" className="border-b border-slate-200 bg-white">
      <Container as="ul" className="grid gap-5 py-6 md:grid-cols-3 md:gap-0">
        {trustItems.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <li key={item.title} className={`flex items-center gap-3.5 md:px-8 ${i === 0 ? 'md:pl-0' : ''} ${i < trustItems.length - 1 ? 'md:border-r md:border-slate-200' : ''}`}>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand" aria-hidden="true">
                <Icon size={22} />
              </span>
              <div>
                <strong className="block text-sm">{item.title}</strong>
                <small className="mt-1 block text-xs text-slate-600">{item.text}</small>
              </div>
            </li>
          )
        })}
      </Container>
    </section>
  )
}
