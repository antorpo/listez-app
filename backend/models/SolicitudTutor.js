const mongoose = require('mongoose')

const solicitudTutorSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    curso_a_ofertar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        require: true
    },
    nota_final: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Solicitud_Tutor', solicitudTutorSchema)