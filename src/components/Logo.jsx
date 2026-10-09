export default function Logo({ dark = false, className = '' }) {
  return (
    <a
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Membranas Villa Bosch - Inicio"
    >
      <img
        src="../../public/images/logoMembrana.png"
        alt="Membranas Villa Bosch"
        className={`h-12 w-auto object-contain ${
          dark ? 'brightness-0 invert' : ''
        }`}
        width="220"
        height="80"
      />
    </a>
  );
}