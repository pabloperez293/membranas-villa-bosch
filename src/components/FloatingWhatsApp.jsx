import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/site'

// Botón flotante: solo ícono, con nombre accesible para lectores de pantalla.
export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Contacto por WhatsApp">
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp (se abre en una pestaña nueva)"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-green-700 text-white shadow-xl shadow-black/25 transition duration-200 hover:-translate-y-0.5 hover:bg-green-800 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
    </aside>
  )
}
