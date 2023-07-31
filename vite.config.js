import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/js/app.tsx", "resources/ts/app.tsx", "resources/ts/lib/dark-mode.ts", "resources/css/app.css"],
      ssr: "resources/js/ssr.tsx",
      refresh: true,
    }),
    react(),
  ],
})
