import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/linear-compass-card.ts",
  output: {
    file: "dist/linear-compass-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser(),
  ],
};
