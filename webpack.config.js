const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/about.js"],

  output: {
    filename: "bundle.js",
  },
};
