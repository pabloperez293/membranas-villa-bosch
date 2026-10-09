# Membranas Villa Bosch — Landing page

Sitio de una sola página hecho con **React 18 + Vite 6 + Tailwind CSS v4** e íconos de `lucide-react`.

## Requisitos
- Node.js 20 o superior (hay un `.nvmrc` con la versión 20).
- npm (viene con Node).

## Instalación
```bash
npm install
```

## Ejecución en desarrollo
```bash
npm run dev
```
Abrí la URL que muestra Vite (normalmente http://localhost:5173).

## Build de producción
```bash
npm run build      # genera la carpeta dist/
npm run preview    # sirve dist/ localmente para revisarlo (http://localhost:4173)
```

## Despliegue en Netlify
El archivo `netlify.toml` ya define el comando de build (`npm run build`), la carpeta publicada (`dist`) y Node 20.

**Opción A — desde Git (recomendada):**
1. Subí el proyecto a un repositorio de GitHub/GitLab (`node_modules` y `dist` están en `.gitignore`).
2. En Netlify: *Add new site → Import an existing project* y elegí el repositorio.
3. Netlify toma la configuración de `netlify.toml`. Tocá *Deploy*.

**Opción B — carga manual:** ejecutá `npm run build` y arrastrá la carpeta `dist` a *Sites* en Netlify.

## Estructura
```
src/
  App.jsx                 Compone las secciones (sin textos ni lógica)
  data/site.js            TODOS los datos: teléfono, textos, servicios, FAQ, opiniones, fotos, enlaces
  components/             Header, Hero, Services, Products, Work, Testimonials (carrusel), Faq, Footer, etc.
  assets/                 Acá va el logo real (ver abajo)
  index.css               Tailwind v4 + tokens de marca (@theme)
public/images/            Fotos en WebP (varios tamaños), servidas con srcset
fotos-originales/         JPG originales (no se publican)
```

## Cómo editar contenido
- **Textos, teléfono, enlaces, FAQ, servicios:** `src/data/site.js`.
- **Color de marca (#0240A1):** `src/index.css`, variable `--color-brand`.
- **Logo real:** copiá el archivo como `src/assets/logo.png` (o `.svg`, `.webp`, `.jpg`). Se detecta solo en el build. Mientras no exista se muestra una marca provisoria (casa + texto) y un favicon provisorio en `public/favicon.svg`.
- **Sumar opiniones al carrusel:** agregá objetos `{ quote, author }` al arreglo `testimonials` de `site.js`. Con una sola opinión el carrusel se muestra fijo y sin controles; con dos o más aparecen flechas, puntos y deslizamiento táctil.
- **Cambiar fotos:** poné el JPG en `fotos-originales/`, generá las variantes WebP (anchos 480/640/960/1280) en `public/images/` con el nombre `<nombre>-<ancho>.webp` y actualizá la entrada en `images` de `site.js`.

## Pendiente de confirmar con el cliente
- **Logo real:** el ZIP recibido no incluía un archivo de logo.
- **Opiniones:** hay una sola opinión cargada. Confirmar que el cliente autoriza publicarla y sumar más opiniones reales. No hay calificaciones con estrellas porque no hay datos reales de puntaje.
- **Garantía:** las condiciones reales (la FAQ solo dice que dependen del trabajo y que se entregan por escrito).
- **Precios y disponibilidad:** no se publican; el sitio indica que se confirman por WhatsApp.
- **Zona de cobertura:** se dice "Villa Bosch y alrededores"; falta confirmar el alcance exacto.
- **Frases comerciales** ("trabajo responsable", "presupuesto antes de avanzar", "evaluación según cada techo") son compromisos del negocio: revisar que el cliente los sostenga.
- **Dominio final:** al tenerlo, agregar `<link rel="canonical">`, una imagen `og:image` con URL absoluta y un `sitemap.xml`.
- **Dirección y horarios:** no figuran en el sitio; se pueden sumar a `site.js` y al JSON-LD de `index.html`.
- **Enlaces de Instagram y TikTok y el número de WhatsApp** (+54 9 11 2328-5990) vienen del proyecto original: verificar que sean los vigentes.
