import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
// })
  // permettre aux appareils de notre reseau d'acceder a notre apk
  server: {
    host: '0.0.0.0', // Ou votre adresse IP (e.g., '192.168.1.100')
    port: 3000, // Ou le port que vous utilisez
  },
});
