const { json } = require("body-parser");
const db = require("../models");
const Tutoria = db.tutoria;
const Tutor = db.tutor;
const Estudiante = db.usuario;
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
  Tutoria.find().exec((err, tutorias) => {
    if (err) {
      return res.status(500).json({ error: true, mensaje: err });
    }

    res.status(200).json({ data: tutorias });
  });
};

findTutoriasPorEstado = (req, res) => {
  const { estado_solicitud } = req.body;

  Tutoria.find({ estado_solicitud: estado_solicitud })
    .populate("tutor", "estudiante", "curso", "estado_solicitud")
    .exec((err, tutorias) => {
      if (err) {
        return res.status(500).json({ error: true, mensaje: err });
      }

      res.status(200).json({ data: tutorias });
    });
};

findAllTutores = (req, res) => {
  Estudiante.find({ roles: "616380a1b1c2b5b8e760d368" })
    .populate([
      "roles",
      {
        path: 'tutor_info',
        populate: {
          path: 'oferta_cursos'
        }
      }
    ])
    .exec((err, tutores) => {
      if (err) {
        return res.status(500).json({ error: true, mensaje: err });
      }

      res.json({ data: tutores });
    });
};

findTutorById = (req, res) => {
  const { id_tutor } = req.body;
  Estudiante.findById(id_tutor).populate([
    "roles",
    {
      path: 'tutor_info',
      populate: {
        path: 'oferta_cursos'
      }
    }
  ]).exec((err, tutor) => {
    if (err) {
      res.status(500).json({ error: true, mensaje: err });
      return;
    }

    res.status(200).json({ data: tutor });
  });
};

module.exports = Object.freeze({
  createTutoria,
  findAllTutorias,
  findTutoriasPorEstado,
  findAllTutores,
  findTutorById,
});
