const mongoose = require('mongoose');

const TutoriaSchema = mongoose.Schema({
    id_tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    id_estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    id_curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso'
    },
    fechas_agendamiento: [
        {
            type: Date
        }
    ],
    estado: {
        type: Boolean
    },
    fecha_solicitud: {
        type: Date
    },
    info_encuentro: {
        type: String
    },
    fecha_concretada: {
        type: Date
    },
    url: {
        type: String
    }
})

module.exports = mongoose.model('Tutoria', TutoriaSchema)