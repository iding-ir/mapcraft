const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/mapcraft.js"
  },
  output: {
    filename: "mapcraft.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [],
  module: {
    rules: []
  }
};
