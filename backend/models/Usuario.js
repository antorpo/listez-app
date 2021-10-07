const mongoose = require('mongoose');

const usuarioSchema= mongoose.Schema({
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
    roles: {
        type: Array,
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
    id_tutorias: {
        type: Array,
        required: false,
    },
    id_cursos_asociados: {
        type: Array,
        required: false,
    }

})

module.exports = mongoose.model('Usuario', usuarioSchema);