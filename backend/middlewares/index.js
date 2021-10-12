const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const verifySignIn = require("./verifySignIn");

module.exports = Object.freeze({
  authJwt,
  verifySignUp,
  verifySignIn,
});
