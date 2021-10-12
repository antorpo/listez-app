const mongoose = require('mongoose')

const solicitudTutorSchema = mongoose.Schema({
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    curso_a_ofertar: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
})

module.exports = mongoose.model('Solicitud_Tutor', solicitudTutorSchema)