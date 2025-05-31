// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hodifa-tech-profile/', // غيّر هذا إلى اسم مستودع GitHub الخاص بك
  plugins: [react()],
})
