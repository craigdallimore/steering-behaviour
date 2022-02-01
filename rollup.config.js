import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import sourcemaps from "rollup-plugin-sourcemaps";
import postcss from "rollup-plugin-postcss";
import postcssModules from "postcss-modules";
import autoprefixer from "autoprefixer";
import postcssNormalize from "postcss-normalize";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/main.tsx",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    external(),
    resolve(),
    commonjs(),
    postcss({
      inject: false, // don't inject JavaScript
      extract: true, // write a CSS file
      modules: true, // enable CSS modules
      plugins: [postcssNormalize(), postcssModules(), autoprefixer()],
      // minimize: true,
      writeDefinitions: false, // true -> generate .css.d.ts files
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    serve("dist"),
    sourcemaps(),
  ],
};
