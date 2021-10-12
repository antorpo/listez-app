const { authJwt } = require("../middlewares");
const router = require("express").Router();
const { testController } = require("../controllers");

router.get("/all", testController.allAccess);

router.get("/student", [authJwt.verifyToken], testController.studentBoard);

router.get("/tutor", [authJwt.verifyToken, authJwt.isTutor], testController.tutorBoard);

router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], testController.adminBoard);

module.exports = router;
