const jwt = require("jsonwebtoken");
const db = require("../models");
const Usuario = db.usuario;
const Rol = db.rol;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ error: true, mensaje: "ACCESO DENEGADO" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: true, mensaje: "TOKEN NO VALIDO" });
    }

    req.user = decoded;
    next();
  });
};

isAdmin = (req, res, next) => {
  Usuario.findById(req.user.id).exec((err, user) => {
    if (err) {
      res.status(500).json({error: true, mensaje: err });
      return;
    }

    Rol.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).json({error: true, mensaje: err });
        return;
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombre === "admin") {
          next();
          return;
        }
      }

      res.status(403).json({ error: true, mensaje: "REQUIERE ROL ADMIN" });
      return;
    });
  });
};

isTutor = (req, res, next) => {
  Usuario.findById(req.user.id).exec((err, user) => {
    if (err) {
      res.status(500).json({ error: true, mensaje: err });
      return;
    }

    Rol.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).json({ error: true, mensaje: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].nombre === "tutor") {
            next();
            return;
          }
        }

        res.status(403).json({ error: true, mensaje: "REQUIERE ROL TUTOR" });
        return;
      }
    );
  });
};

const authJwt = Object.freeze({
  verifyToken,
  isAdmin,
  isTutor,
});

module.exports = authJwt;
