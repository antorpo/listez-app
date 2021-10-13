const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
  documento_identidad: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tutorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tutoria',
    }
  ],
  cursos_asociados: {
    type: Array,
    required: false,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rol",
    },
  ],
  tutorInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
  }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
