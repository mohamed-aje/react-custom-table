import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    postcss({
      extract: true,
      minimize: true,
      modules: true,
    }),
  ],
  external: [
    "react",
    "react-dom",
    "react-icons",
    "react-icons/md",
    "react-tooltip",
    "react-window",
  ],
};
