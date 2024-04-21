const { merge } = require("webpack-merge");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const Dotenv = require("dotenv-webpack");
const commonConfig = require("./webpack.common");
const paths = require("./paths");
// const packageJson = require("../package.json");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const domain = process.env.PRODUCTION_DOMAIN;
const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: process.env.PORT || 7000,
    historyApiFallback: true,
    static: paths.build,
    open: true,
    // compress: true,
    hot: false,
    liveReload: true,
    allowedHosts: [
      ".local-uplatform.internal",
      "localhost",
      ".local-test-uplatform.internal",
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "datatracker",
      filename: "remoteEntry.js",
      exposes: {
        "./DataTrackerApp": "./src/bootstrap",
      },
      remotes: {
        //Remote
        everstoneCore: `everstoneCore@${domain}/everstone-core-build/remoteEntry.js`,
        // //local
        // everstoneCoreDev: `everstoneCore@http://localhost:9094/remoteEntry.js`,
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: paths.build,
    pathinfo: false,
    // publicPath: "http://localhost:9091/",
    publicPath: `http://localhost:${
      process.env.PORT ? process.env.PORT : 7000
    }/`,
    clean: true,
  },
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: false, importLoaders: 1, modules: false },
          },
          // { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: false } },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
