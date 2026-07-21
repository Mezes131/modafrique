import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ponytail: GitHub Pages project site lives at /modafrique/
  base: '/modafrique/',
  plugins: [react()],
})
