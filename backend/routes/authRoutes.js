const { verifySignUp, verifySignIn } = require("../middlewares");
const router = require("express").Router();
const { authController } = require("../controllers");

// router.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );

//   next();
// });

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
