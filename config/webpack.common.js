const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");
require("dotenv").config({ path: "./.env" });
const packageJson = require("../package.json");
const path = require("path");

const paths = require("./paths");
const createEnvironmentHash = require("./webpack/persistentCache/createEnvironmentHash");
const fs = require("fs");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],

  // Where webpack outputs the assets and bundles
  // output: {
  //   path: paths.build,
  //   filename: "[name].bundle.js",
  //   publicPath: paths.build,
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      // {
      //   test: /\.(scss|css)$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         implementation: require("sass"),
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(?:ico|png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    //new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    // new ModuleFederationPlugin({
    //   name: "datatracker",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./DataTrackerApp": "./src/bootstrap",
    //   },
    //   //  shared: packageJson.dependencies,
    // }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      favicon: paths.public + "/favicon.ico",
      template: paths.public + "/index.html", // template file
      filename: "index.html", // output file
    }),
  ],
  cache: {
    type: "filesystem",
    version: createEnvironmentHash(process.env),
    cacheDirectory: paths.appWebpackCache,
    store: "pack",
    buildDependencies: {
      defaultWebpack: ["webpack/lib/"],
      config: [__filename],
      tsconfig: [paths.appTsConfig, paths.appJsConfig].filter((f) =>
        fs.existsSync(f)
      ),
    },
  },
  // resolve: {
  //   modules: ["node_modules"],
  //   extensions: [".js", ".jsx", ".json"],
  //   alias: {
  //     "@": paths.src,
  //     assets: paths.public,
  //   },
  // },
};
