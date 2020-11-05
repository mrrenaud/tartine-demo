const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./build/prod"),
    publicPath: '',
  },
});
