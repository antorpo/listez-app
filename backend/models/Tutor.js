const mongoose = require('mongoose')

const TutorSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    oferta_cursos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Curso',
            require: true
        }
    ]

})

module.exports = mongoose.model('Tutor', TutorSchema)