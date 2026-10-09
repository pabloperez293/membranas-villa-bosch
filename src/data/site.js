// Fuente única de datos de la landing. Para cambiar textos, enlaces o fotos, editá solo este archivo.

export const site = {
  name: 'Membranas Villa Bosch',
  phone: '5491123285990',
  phoneDisplay: '+54 9 11 2328-5990',
  area: 'Villa Bosch y alrededores',
  defaultMessage: 'Hola, quisiera pedir una cotización para impermeabilizar un techo.',
  instagram: 'https://www.instagram.com/membranavillabosch/',
  tiktok: 'https://www.tiktok.com/@membranasvbosch',
  portfolio: {
    label: 'Pablo Pérez',
    href: 'https://portafolioperezpablo.netlify.app/',
  },
}

export const whatsappUrl = (message = site.defaultMessage) =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`

// Fotos: se generan variantes WebP `/images/<name>-<ancho>.webp`. Los originales están en /fotos-originales.
export const images = {
  hero: {
    name: 'techo-rojo-general',
    width: 1280,
    height: 960,
    widths: [480, 640, 960, 1280],
    alt: '',
  },
  materials: {
    name: 'techo-membrana-negra',
    width: 720,
    height: 1280,
    widths: [480, 640, 720],
    alt: 'Rollos de membrana apoyados sobre una terraza con membrana oscura',
  },
  workRed: {
    name: 'techo-rojo-detalle',
    width: 960,
    height: 1280,
    widths: [480, 640, 960],
    alt: 'Terraza con impermeabilización roja y un tanque de agua cubierto',
  },
  workSilver: {
    name: 'techo-membrana-plateada',
    width: 1280,
    height: 960,
    widths: [480, 640, 960, 1280],
    alt: 'Terraza con membrana plateada colocada, con casas del barrio al fondo',
  },
  workProcess: {
    name: 'colocacion-trabajador',
    width: 1080,
    height: 1080,
    widths: [480, 640, 960, 1080],
    alt: 'Trabajador aplicando producto sobre una terraza junto a un balde',
  },
}

export const imageSrc = (img) => `/images/${img.name}-${img.widths[img.widths.length - 1]}.webp`
export const imageSrcSet = (img) =>
  img.widths.map((w) => `/images/${img.name}-${w}.webp ${w}w`).join(', ')

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#productos' },
  { label: 'Trabajos reales', href: '#trabajos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Preguntas', href: '#preguntas' },
]

export const hero = {
  eyebrow: 'IMPERMEABILIZACIÓN PROFESIONAL',
  titleLine1: 'Un techo protegido.',
  titleLine2: 'La tranquilidad de tu hogar.',
  lead: 'Venta, colocación y reparación de membranas en Villa Bosch y alrededores. Te asesoramos según el estado de tu techo.',
  primaryCta: 'Pedí tu cotización',
  secondaryCta: 'Ver trabajos reales',
  points: ['Atención personalizada', 'Evaluación según cada techo', 'Consulta directa por WhatsApp'],
  footerLeft: 'PROTECCIÓN PARA TECHOS Y TERRAZAS',
  footerRight: 'VILLA BOSCH · BUENOS AIRES',
}

export const trustItems = [
  { icon: 'shield', title: 'Trabajo responsable', text: 'Cuidado en cada detalle' },
  { icon: 'clock', title: 'Coordinación directa', text: 'Hablás con el equipo' },
  { icon: 'badge', title: 'Presupuesto antes de avanzar', text: 'Acordamos el alcance con vos' },
]

export const services = [
  {
    icon: 'droplets',
    title: 'Membranas asfálticas',
    description:
      'Venta y colocación de membranas con o sin aluminio, en distintos espesores según la necesidad del techo.',
    tag: 'Protección contra filtraciones',
  },
  {
    icon: 'house',
    title: 'Membrana geotextil transitable',
    description:
      'Una alternativa para terrazas y superficies que necesitan resistencia y terminación transitable.',
    tag: 'Para terrazas',
  },
  {
    icon: 'sparkles',
    title: 'Membrana líquida y pinturas',
    description:
      'Soluciones para mantenimiento, sellado y protección de superficies expuestas a la intemperie.',
    tag: 'Mantenimiento y sellado',
  },
  {
    icon: 'thermometer',
    title: 'Aislantes y reparación',
    description:
      'Evaluamos el estado del techo y te orientamos sobre los materiales y el tratamiento adecuados.',
    tag: 'Soluciones a medida',
  },
]

export const products = {
  kicker: 'MATERIALES Y OPCIONES',
  title: 'La solución correcta empieza por elegir bien.',
  text: 'Trabajamos con distintas alternativas para que puedas elegir según el uso, el estado y las necesidades de tu superficie.',
  list: [
    'Membranas con o sin aluminio',
    'Diferentes espesores',
    'Membrana geotextil transitable',
    'Pinturas asfálticas y membrana líquida',
    'Aislantes y mantenimiento de techos',
  ],
  cta: 'Consultar productos',
  ctaMessage: 'Hola, quisiera conocer las opciones de membranas y materiales disponibles.',
  note: 'Disponibilidad y precios a confirmar por WhatsApp.',
  badgeTitle: 'Materiales según cada techo',
  badgeText: 'La opción se define después de evaluar la superficie.',
}

export const work = {
  kicker: 'TRABAJOS REALES',
  title: 'El trabajo se ve.',
  titleLine2: 'La confianza también.',
  items: [
    { image: 'workRed', label: '01 / TERMINACIÓN', caption: 'Terraza con terminación roja teja' },
    { image: 'workSilver', label: '02 / MEMBRANA', caption: 'Membrana aluminada sobre terraza' },
    { image: 'workProcess', label: '03 / PROCESO', caption: 'Trabajo en obra' },
  ],
}

// Solo opiniones reales. Para sumar más, agregá objetos a este arreglo y el carrusel las incluye solo.
export const testimonials = [
  {
    quote:
      'En un solo día dejaron todo impecable, trabajando con muchísima prolijidad, responsabilidad y materiales de primera calidad.',
    author: 'Cliente de Membranas Villa Bosch',
  },
]

export const process = {
  kicker: 'SIMPLE Y DIRECTO',
  title: 'De la consulta al techo protegido.',
  text: 'Contanos qué necesitás y coordinamos los próximos pasos.',
  steps: [
    { title: 'Nos contactás', text: 'Escribinos por WhatsApp y contanos qué problema tiene el techo.' },
    { title: 'Evaluamos', text: 'Podés enviarnos fotos y la ubicación para orientar la consulta.' },
    { title: 'Presupuestamos', text: 'Te explicamos la solución sugerida y el costo antes de avanzar.' },
    { title: 'Coordinamos', text: 'Acordamos materiales, alcance del trabajo y fecha disponible.' },
  ],
}

export const faqs = [
  {
    q: '¿Cuánto tarda la colocación de una membrana?',
    a: 'Depende de los metros cuadrados, el estado de la superficie y el tipo de material. Escribinos por WhatsApp y, con algunos datos o fotos del techo, podemos orientarte sobre los tiempos.',
  },
  {
    q: '¿Qué garantía tienen los trabajos?',
    a: 'La garantía depende del sistema utilizado y del trabajo realizado. Consultá las condiciones por escrito al pedir tu presupuesto para conocer exactamente qué incluye.',
  },
  {
    q: '¿Qué tipo de membrana necesita mi techo?',
    a: 'No todos los techos necesitan la misma solución. Tenemos en cuenta el estado de la superficie, si es transitable y el problema que presenta para recomendarte una opción.',
  },
  {
    q: '¿Trabajan solamente en Villa Bosch?',
    a: 'Villa Bosch es nuestra zona de referencia y también atendemos consultas de zonas aledañas. Mandanos tu ubicación para confirmar disponibilidad.',
  },
]

export const finalCta = {
  kicker: 'HABLEMOS DE TU TECHO',
  title: 'Una consulta hoy puede',
  titleLine2: 'evitar un problema mañana.',
  text: 'Contanos qué necesitás. Te respondemos directamente por WhatsApp.',
  button: 'Pedir cotización',
}
