import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  base: "./",
  root: path.resolve("./src"),
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
