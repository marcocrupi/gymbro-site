import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Imposta il base path per GitHub Pages (repo project):
  // Se il repository è <username>.github.io usa base: '/' altrimenti '/gymbro-site/'
  base: '/gymbro-site/',
  plugins: [react()],
})
