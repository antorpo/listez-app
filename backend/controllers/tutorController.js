const { json } = require("body-parser");
const db = require("../models");
const Tutoria = db.tutoria;
const Estado = db.estado;

createTutoria = (req, res) => {
  const { id_estudiante, id_curso, fecha_agendamiento, info_encuentro } =
    req.body;
  const newTutoria = new Tutoria({
    estudiante: id_estudiante,
    curso: id_curso,
    fecha_agendamiento: fecha_agendamiento,
    info_encuentro: info_encuentro,
  });

  newTutoria.save((err, tutoria) => {
    if (err) {
      res.status(500).json({ error: true, mensaje: err });
      return;
    }

    Estado.findOne({ nombre: "pendiente" }, (err, estado) => {
      if (err) {
        res.status(500).json({ error: true, mensaje: err });
        return;
      }

      tutoria.estado_solicitud = estado._id;

      tutoria.save((err) => {
        if (err) {
          res.status(500).json({ error: true, mensaje: err });
          return;
        }

        res.status(200).json({ mensaje: "TUTORIA SOLICITADA CORRECTAMENTE" });
      });
    });
  });
};

findAllTutorias = (req, res) => {
  Tutoria.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: true, mensaje: "ERROR TRAYENDO LAS TUTORIAS" });
    });
};

findTutoriasPorEstado = (req, res) => {
  const { estado_solicitud } = req.body;
  Tutoria.find({ estado_solicitud: estado_solicitud }, (err, tutorias) => {
    if (err) {
      return res.status(500).json({ error: true, mensaje: err });
    }

    res.json(tutorias);
  });
};

module.exports = Object.freeze({
  createTutoria,
});
