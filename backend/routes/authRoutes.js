const { verifySignUp, verifySignIn } = require("../middlewares");
const router = require("express").Router();
const { authController } = require("../controllers");

router.post(
  "/login",
  [verifySignIn.typeValidations, verifySignIn.checkEmailExists],
  authController.signIn
);

router.post(
  "/register",
  [
    verifySignUp.typeValidations,
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkDuplicateDocument,
    verifySignUp.checkRoleExisted,
  ],
  authController.signUp
);

module.exports = router;
