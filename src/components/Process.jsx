import Container from './Container'
import { process } from '../data/site'

export default function Process() {
  return (
    <section aria-labelledby="titulo-proceso" className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-[11px] font-extrabold tracking-[0.17em] text-brand">{process.kicker}</span>
          <h2 id="titulo-proceso" className="mt-3.5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-extrabold tracking-tight">
            {process.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{process.text}</p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {process.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-slate-200 bg-paper p-5">
              <span className="text-sm font-extrabold text-brand" aria-hidden="true">0{i + 1}</span>
              <h3 className="mt-2 mb-1.5 text-base font-bold">{step.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
