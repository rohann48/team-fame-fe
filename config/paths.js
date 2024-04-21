const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  // Source files
  src: path.resolve(__dirname, "../src"),

  // Production build files
  build: path.resolve(__dirname, "../team-fame-build"),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, "../public"),
  appTsConfig: resolveApp("tsconfig.json"),
  appJsConfig: resolveApp("jsconfig.json"),
  appWebpackCache: resolveApp("node_modules/.cache"),
};
