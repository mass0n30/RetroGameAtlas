import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: false }, // disable PWA in dev mode
      manifest: {
        name: "RetroGamingAtlas - Discover Retro Video Games",
        short_name: "RetroGamingAtlas",
        description: "Discover over 25k retro video games, with rich details, speedrun and ebay data, with tracking features and related content.",
        start_url: "/",
        scope: "/",
        display: "standalone", // removes browser UI for more app like UI
        background_color: "#111827",
        theme_color: "#111827",
        icons: [
          { src: "/pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512.png", sizes: "512x512", type: "image/png" },
          { src: "/pwa-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ],
      },
      includeAssets: [
        "apple-touch-icon.png"
      ]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  },
  server: {
    host: true,
    allowedHosts: "all", // CHANGE IN PRODUCTION!!
  }, 
})
