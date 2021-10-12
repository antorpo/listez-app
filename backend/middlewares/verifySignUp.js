/**
 * Middleware functions to verify a SignUp action
 */
const db = require("../models");
const Usuario = db.usuario;
const ROLES = db.ROLES;
const Joi = require("@hapi/joi");

typeValidations = (req, res, next) => {
  const schemaRegister = Joi.object({
    documento_identidad: Joi.string().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    correo: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = schemaRegister.validate(req.body);
  if (error) {
    return res.status(400).json({
      mensaje: error.details[0].message,
      error: true,
    });
  }

  next();
};

// Check duplications for email
checkDuplicateEmail = (req, res, next) => {
  Usuario.findOne({ correo: req.body.correo }).exec((err, user) => {
    if (err) {
      res.status(500).json({ error: true, mensaje: err });
      return;
    }

    if (user) {
      res.status(400).json({error: true, mensaje: "CORREO YA ESTA EN USO" });
      return;
    }

    next();
  });
};

// Check duplications for document
checkDuplicateDocument = (req, res, next) => {
  Usuario.findOne({ documento_identidad: req.body.documento_identidad }).exec(
    (err, user) => {
      if (err) {
        res.status(500).json({ error: true, mensaje: err });
        return;
      }

      if (user) {
        res.status(400).json({ error: true, mensaje: "EL DOCUMENTO YA FUE REGISTRADO" });
        return;
      }

      next();
    }
  );
};

// Check if roles in the request is legal or not
checkRoleExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(404).json({error: true, mensaje: `ROL ${req.body.roles[i]} NO EXISTE` });
      }
      return;
    }
  }

  next();
};

const verifySignUp = Object.freeze({
  typeValidations,
  checkDuplicateEmail,
  checkDuplicateDocument,
  checkRoleExisted,
});

module.exports = verifySignUp;
