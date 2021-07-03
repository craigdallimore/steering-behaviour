// @flow
import flow from "rollup-plugin-flow";
import serve from "rollup-plugin-serve";
import sourcemaps from "rollup-plugin-sourcemaps";

export default {
  input: "src/entry.js",
  output: {
    file: "dist/bundle.js",
  },
  // $FlowIgnoreError
  plugins: [flow(), serve("dist"), sourcemaps()],
};
