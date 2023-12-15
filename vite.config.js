import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env': {
      type: 'module',
    },
  },
  base: "",
  plugins: [react()],
  server: {
    host: '192.168.1.100'
  }
})
