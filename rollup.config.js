import fs from "fs";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import sourcemaps from "rollup-plugin-sourcemaps";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import postcssNormalize from "postcss-normalize";
import postcssImport from "postcss-import";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";
import livereload from "rollup-plugin-livereload";

const envPlugins =
  process.env.NODE_ENV === "development"
    ? [serve({ contentBase: "dist", port: 9999 }), livereload()]
    : [];

function buildHTML() {
  return {
    name: "build-html",
    buildStart: async function buildStart() {
      const content = await fs.promises.readFile("./html/index.html", "utf-8");
      const nextHtml =
        process.env.NODE_ENV === "development"
          ? content
          : content.replace(
              '<script src="http://localhost:35729/livereload.js"></script>',
              ""
            );
      return await fs.promises.writeFile("./dist/index.html", nextHtml);
    },
  };
}

export default [
  {
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
        plugins: [postcssNormalize(), postcssImport(), autoprefixer()],
        writeDefinitions: false, // true -> generate .css.d.ts files
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      sourcemaps(),
      buildHTML(),
    ].concat(envPlugins),
  },
];
