import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import pkg from "./package.json";


const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.tsx";
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
  resolve(),
  commonJS({
    include: "node_modules/**",
  }),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "iife",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    plugins,
    external: ["react", "react-dom"],
  },
];
