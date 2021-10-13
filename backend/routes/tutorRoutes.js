const { authJwt, verifyTutorTutorias } = require("../middlewares");
const router = require("express").Router();
const { tutorController } = require("../controllers");

router.post("/create", [authJwt.verifyToken, verifyTutorTutorias.typeValidationsSolicitudTutorias, verifyTutorTutorias.checkDuplicateTutoria], tutorController.createTutoria);

module.exports = router;
