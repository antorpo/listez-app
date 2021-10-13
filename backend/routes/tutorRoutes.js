const { authJwt } = require("../middlewares");
const router = require("express").Router();
const { tutorController } = require("../controllers");

router.post("/create", [authJwt.verifyToken], tutorController.createTutoria);

module.exports = router;
