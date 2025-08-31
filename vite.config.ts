import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/secure": {
        target: "https://siwes-finder-backend.onrender.com/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/secure/, ""),
      },
    },
  },
});
