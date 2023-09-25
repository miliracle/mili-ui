import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'node:url';
import copy from 'rollup-plugin-copy';

export default defineConfig ({
  plugins: [
    copy({
      targets: [
        { src: 'src/styles/_variables.scss', dest: 'dist/lib/scss' }
      ],
      hook: 'writeBundle'
    }),
    dts({
      insertTypesEntry: true,
      exclude: [
        "docs"
      ]
    })
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