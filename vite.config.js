import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.39', // Bind to your specific IP address
    port: 5197, // You can change the port if needed
    strictPort: false, // Ensures that the server will not start if the port is already in use
    open: true, // Automatically open the app in the browser on server start
  }
})
