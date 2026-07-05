import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rescue_link_ai/',  // 👈 add this, matching your repo name exactly
})
