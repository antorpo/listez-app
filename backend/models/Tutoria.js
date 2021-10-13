const mongoose = require("mongoose");

const TutoriaSchema = mongoose.Schema({
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: false,
  },
  estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Curso",
    require: true,
  },
  fecha_agendamiento: {
    type: Date,
    require: true,
  },
  estado_solicitud: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Estado",
  },
  fecha_solicitud: {
    type: Date,
    default: Date.now,
  },
  info_encuentro: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Tutoria", TutoriaSchema);
