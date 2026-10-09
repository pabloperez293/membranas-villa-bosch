export default function SectionHeading({ kicker, children, dark = false, id, className = '' }) {
  return (
    <div className={className}>
      <span className={`text-[11px] font-extrabold tracking-[0.17em] ${dark ? 'text-sky-300' : 'text-brand'}`}>
        {kicker}
      </span>
      <h2 id={id} className="mt-3.5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-extrabold tracking-tight">
        {children}
      </h2>
    </div>
  )
}
