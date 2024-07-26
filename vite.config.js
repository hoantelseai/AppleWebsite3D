import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),sentryVitePlugin({
    org: "jsm-y2c",
    project: "javascript-react",
    
  })],
 base: "/Apple_Website_3D/",
  build: {
    sourcemap: true
  }
})