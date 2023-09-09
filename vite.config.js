import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'node:url';

export default defineConfig ({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        "docs"
      ]
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "mili-ui",
   		 
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", fileURLToPath(
        new URL(
          "docs",
          import.meta.url
        )
      ),],
    },
  },
});