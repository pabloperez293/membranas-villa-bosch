import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Build de producción: `npm run build` -> carpeta `dist`
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
