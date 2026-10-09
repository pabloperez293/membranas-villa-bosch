const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  light: 'bg-white text-brand hover:bg-brand-50',
  ghost: 'border border-white/40 bg-white/10 text-white hover:bg-white/20',
}

// Enlace con aspecto de botón. Si es externo se abre en pestaña nueva y se avisa a lectores de pantalla.
export default function Button({ href, variant = 'primary', external = false, className = '', children, ...props }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg px-5 py-3.5 text-sm font-bold transition-colors duration-200 motion-reduce:transition-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {external && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
    </a>
  )
}
