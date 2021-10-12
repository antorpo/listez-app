const mongoose = require('mongoose')

const CursoSchema = mongoose.Schema({
    nombre_curso: {
        type: String,
        require: true
    },
    modalidad: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Curso', CursoSchema)