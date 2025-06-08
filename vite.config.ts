import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio-Website/',  // Make sure this matches your repo name exactly, case-sensitive
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
