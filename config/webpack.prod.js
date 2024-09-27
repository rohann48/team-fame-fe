const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const paths = require("./paths");
const common = require("./webpack.common");
const domain = process.env.PRODUCTION_DOMAIN;
const localDomain = process.env.LOCAL_DOMAIN || "http://localhost";
module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "/team-fame-build/",
    filename: "js/[name].[contenthash].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          //   "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: "team-fame",
  //     filename: "remoteEntry.js",
  //     exposes: {
  //       "./DataTrackerApp": "./src/bootstrap",
  //     },
  //     remotes: {
  //       //For remote
  //       everstoneCore: `everstoneCore@${domain}/everstone-core-build/remoteEntry.js`,

  //       //To run everstone locally in Prod
  //       everstoneCoreDev: `everstoneCore@${localDomain}:9094/remoteEntry.js`,
  //     },
  //   }),
  //   // Extracts CSS into separate files
  //   new MiniCssExtractPlugin({
  //     filename: "styles/[name].[contenthash].css",
  //     chunkFilename: "[id].css",
  //   }),
  // ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": paths.src,
      assets: paths.public,
    },
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [new CssMinimizerPlugin(), "..."],
  //   runtimeChunk: {
  //     name: "runtime",
  //   },
  // },
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
});
