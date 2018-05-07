const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        options: {
          presets: ["env"]
        }
      }
    ]
  },
  node: {
    __filename: false,
    __dirname: false
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "index",
    libraryTarget: "commonjs2"
  },

  mode: "development"
};
