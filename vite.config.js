import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config - React + Vite, base path is relative so build output
// can be deployed to any subfolder on shared hosting.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
