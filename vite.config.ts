import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@views": path.resolve(__dirname, "src/views"),
      "@components": path.resolve(__dirname, "src/components"),
      "@router": path.resolve(__dirname, "src/router"),
      "@store": path.resolve(__dirname, "src/store"),
      "@model": path.resolve(__dirname, "src/model"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
  },
});
