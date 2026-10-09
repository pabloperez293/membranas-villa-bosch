import { Instagram, MapPin, Phone, PlayCircle } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import { site, whatsappUrl } from '../data/site'

const socialClass =
  'grid size-11 place-items-center rounded-lg border border-slate-600 text-slate-100 transition-colors hover:border-white hover:bg-brand'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-7 pt-10 pb-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.2fr_auto] lg:items-center">
        <Logo dark />
        <p className="max-w-xs text-sm leading-7 text-slate-300">
          Soluciones para impermeabilización, reparación y protección de techos.
        </p>
        <ul className="grid gap-2.5 text-sm text-slate-200">
          <li>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:underline">
              <Phone size={16} className="text-sky-300" aria-hidden="true" /> {site.phoneDisplay}
              <span className="sr-only"> (WhatsApp, se abre en una pestaña nueva)</span>
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin size={16} className="text-sky-300" aria-hidden="true" /> {site.area}
          </li>
        </ul>
        <div className="flex gap-2.5">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (se abre en una pestaña nueva)" className={socialClass}>
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok (se abre en una pestaña nueva)" className={socialClass}>
            <PlayCircle size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>

      <div className="border-t border-slate-700">
        <Container className="flex flex-col gap-2 py-5 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>
            Sitio web desarrollado por{' '}
            <a
              href={site.portfolio.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline underline-offset-2 hover:text-sky-300"
            >
              {site.portfolio.label}
              <span className="sr-only"> (portfolio, se abre en una pestaña nueva)</span>
            </a>
          </span>
        </Container>
      </div>
    </footer>
  )
}
