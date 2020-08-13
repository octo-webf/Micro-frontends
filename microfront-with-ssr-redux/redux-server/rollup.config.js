import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
  input: "./redux/main.js",
  output: {
    name: "global-store",
    file: "./bundle/bundle.js",
    format: "umd",
  },
  plugins: [
    commonjs(),
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
