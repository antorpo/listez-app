const mongoose = require('mongoose');

const TutoriaSchema = mongoose.Schema({
    id_tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: false
    },
    id_estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    id_curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        require: true
    },
    fechas_agendamiento: [
        {
            type: Date,
            require: true
        }
    ],
    estado_solicitud: {
        type: Boolean,
        require: true
    },
    fecha_solicitud: {
        type: Date,
        require: true
    },
    info_encuentro: {
        type: String,
        require: true
    },
    fecha_concretada: {
        type: Date,
        require: false
    },
    url: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Tutoria', TutoriaSchema)