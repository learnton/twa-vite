import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), basicSsl()],
  build: {
    outDir: "./dist",
  },
  base: "/twa-vite/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
