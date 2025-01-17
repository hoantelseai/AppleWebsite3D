import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/Apple_Website_3D/",
  plugins: [react()
    ,sentryVitePlugin({
    org: "jsm-y2c",
    project: "javascript-react",
  })
],
  build: {
    sourcemap: true
  }
})

// export default defineConfig({
//   base: "/AppleWebsite3D/",
//   plugins: [react()],
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/AppleWebsite3D/",
//   plugins: [react()],
// })
