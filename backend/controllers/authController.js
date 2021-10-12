const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const Usuario = db.usuario;
const Rol = db.rol;

signIn = async (req, res) => {
  const { correo, password } = req.body;
  Usuario.findOne({ correo: correo })
    .populate("roles", "-__v")
    .exec(async (err, user) => {
      const passwordValida = await bcrypt.compare(password, user.password);

      if (!passwordValida) {
        return res
          .status(400)
          .json({ error: true, mensaje: "CREDENCIALES INCORRECTAS" });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.TOKEN_SECRET
      );

      var roles = [];

      for (let i = 0; i < user.roles.length; i++) {
        roles.push("ROL_" + user.roles[i].nombre.toUpperCase());
      }

      res.status(200).send({
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        documento_identidad: user.documento_identidad,
        roles,
        accessToken: token,
      });

      res.header("x-access-token", token);
    });
};

signUp = async (req, res) => {
  const { documento_identidad, nombre, apellido, correo, password } = req.body;

  const saltos = await bcrypt.genSalt(10);
  const passwordCrypt = await bcrypt.hash(password, saltos);

  const usuario = new Usuario({
    documento_identidad,
    nombre,
    apellido,
    correo,
    password: passwordCrypt,
  });

  usuario.save((err, user) => {
    if (err) {
      res.status(500).json({ error: true, mensaje: err });
      return;
    }

    Rol.findOne({ nombre: "estudiante" }, (err, role) => {
      if (err) {
        res.status(500).json({ error: true, mensaje: err });
        return;
      }

      user.roles = [role._id];
      user.save((err) => {
        if (err) {
          res.status(500).json({ error: true, mensaje: err });
          return;
        }

        res.status(200).json({ mensaje: "USUARIO REGISTRADO EXITOSAMENTE" });
      });
    });
  });
};

module.exports = Object.freeze({
  signIn,
  signUp,
});
