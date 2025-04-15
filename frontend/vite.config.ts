import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), flowbiteReact()
  ],
  base: '/', // For deploying to root domain
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
