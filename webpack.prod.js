const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/mapcraft.js",
  },
  output: {
    filename: "mapcraft.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
};
