import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (gymbrotools.com): gli asset devono essere serviti da '/'
  // Se in futuro userai il dominio *.github.io senza custom domain,
  // imposta qui il base a '/<repo>/'
  base: '/',
  plugins: [react()],
})
