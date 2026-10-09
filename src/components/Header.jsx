import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import { nav, whatsappUrl } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Escape cierra el menú; al pasar a escritorio también se cierra.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="relative flex h-[72px] items-center justify-between lg:h-20">
        <Logo />

        <button
          type="button"
          className="relative grid size-11 place-items-center rounded-lg text-slate-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <Menu
            aria-hidden="true"
            className={`absolute transition duration-300 motion-reduce:transition-none ${open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          />
          <X
            aria-hidden="true"
            className={`absolute transition duration-300 motion-reduce:transition-none ${open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}
          />
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`absolute inset-x-0 top-full flex flex-col border-b border-slate-200 bg-white px-5 pt-2 pb-5 shadow-lg transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none lg:visible lg:static lg:translate-y-0 lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:text-brand lg:border-0 lg:py-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark lg:mt-0"
          >
            Pedir cotización <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}
