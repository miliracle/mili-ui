import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'node:url';

const htmlImport = {
  name: "htmlImport",
  /**
   * Checks to ensure that a html file is being imported.
   * If it is then it alters the code being passed as being a string being exported by default.
   * @param {string} code The file as a string.
   * @param {string} id The absolute path. 
   * @returns {{code: string}}
   */
  transform(code, id) {
    if (/^.*\.html$/g.test(id)) {
      code = `export default \`${code}\``
    }
    return { code }
  }
}

export default defineConfig ({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        "docs"
      ]
    }),
    htmlImport,
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