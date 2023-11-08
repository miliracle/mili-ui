import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'node:url';
import copy from 'rollup-plugin-copy';

export default defineConfig ({
  plugins: [
    copy({
      targets: [
        { src: 'styles/_variables.scss', dest: '../dist/lib/scss' },
        { src: 'package.json', dest: '../dist' }
      ],
      hook: 'writeBundle'
    }),
    dts({
      insertTypesEntry: true,
      exclude: [
        ".storybook",
        "resources",
        "scripts",
        "stories",
      ]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "mili-ui",
      fileName: "index",
    },
    outDir: "../dist",
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