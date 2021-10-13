const mongoose = require('mongoose')

const TutorSchema = mongoose.Schema({
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