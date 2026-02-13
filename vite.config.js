import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  base: "./",
  root: path.resolve("./src"),
  build: {
    outDir: "../dist",
    emptyOutDir: true, // also necessary
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  optimizeDeps: {
    exclude: ["@sqlite.org/sqlite-wasm"],
  },
});
