// @flow
import flow from "rollup-plugin-flow";

export default {
  input: "src/entry.js",
  output: {
    file: "dist/bundle.js",
  },
  plugins: [flow()],
};
