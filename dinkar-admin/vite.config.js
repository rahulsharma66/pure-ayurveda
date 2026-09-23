import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env?.DEV ? "/" : "/admin/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})