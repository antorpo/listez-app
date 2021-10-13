const { authJwt, verifyTutorTutorias } = require("../middlewares");
const router = require("express").Router();
const { tutorController } = require("../controllers");

router.post("/create", [authJwt.verifyToken, verifyTutorTutorias.typeValidationsSolicitudTutorias, verifyTutorTutorias.checkDuplicateTutoria], tutorController.createTutoria);
router.get("/tutores", [authJwt.verifyToken], tutorController.findAllTutores);
router.get("/tutor", [authJwt.verifyToken], tutorController.findTutorById)

module.exports = router;
