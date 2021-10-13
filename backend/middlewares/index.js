const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const verifySignIn = require("./verifySignIn");
const verifyTutorTutorias = require('./verifyTutorTutorias');

module.exports = Object.freeze({
  authJwt,
  verifySignUp,
  verifySignIn,
  verifyTutorTutorias,
});
