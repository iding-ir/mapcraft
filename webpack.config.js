const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/mapcraft.js"
  },
  plugins: [],
  module: {
    rules: []
  },
  output: {
    filename: "mapcraft.js",
    path: path.resolve(__dirname, "dist")
  }
};
