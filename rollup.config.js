/// <reference path='./src/@types/rollup-plugin-serve/index.d.ts' />

import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import sourcemaps from "rollup-plugin-sourcemaps";

export default {
  input: "src/entry.ts",
  output: {
    file: "dist/bundle.js",
  },
  plugins: [typescript(), serve("dist"), sourcemaps()],
};
