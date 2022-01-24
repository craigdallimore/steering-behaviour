import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import sourcemaps from "rollup-plugin-sourcemaps";
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
    typescript({ tsconfig: "./tsconfig.json" }),
    serve("dist"),
    sourcemaps(),
  ],
};
