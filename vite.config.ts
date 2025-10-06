import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Base dinamica per GitHub Pages:
// - In GitHub Actions, usa '/<repo>/' per project pages
// - Per siti utente/organizzazione (<username>.github.io), usa '/'
// - In sviluppo locale rimane '/'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repo ? repo.endsWith('.github.io') : false
const inActions = !!process.env.GITHUB_ACTIONS
const base = inActions ? (isUserSite ? '/' : `/${repo}/`) : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
