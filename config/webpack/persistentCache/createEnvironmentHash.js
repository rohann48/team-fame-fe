// const { createHash } = require("crypto");

// module.exports = (env) => {
//   const hash = createHash("md5");
//   hash.update(JSON.stringify(env));

//   return hash.digest("hex");
// };
const { createHash } = require("crypto");

module.exports = (env) => {
  const hash = createHash("sha512");
  hash.update(JSON.stringify(env));

  return hash.digest("hex");
};
