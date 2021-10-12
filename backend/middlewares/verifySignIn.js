const db = require("../models");
const Usuario = db.usuario;
const Joi = require("@hapi/joi");

typeValidations = (req, res, next) => {
  const schemaLogin = Joi.object({
    correo: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400).json({
      mensaje: error.details[0].message,
      error: true,
    });
  }
  next();
};

checkEmailExists = (req, res, next) => {
  Usuario.findOne({ correo: req.body.correo }).exec((err, user) => {
    if (err) {
      res.status(500).json({ error: true, mensaje: err });
      return;
    }

    if (!user) {
      return res.status(400).json({
        error: true,
        mensaje: "USUARIO NO REGISTRADO",
      });
    }

    next();
  });
};

const verifySignIn = Object.freeze({
  typeValidations,
  checkEmailExists,
});

module.exports = verifySignIn;
