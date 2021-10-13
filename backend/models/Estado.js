const mongoose = require('mongoose')

const EstadoSchema = mongoose.Schema({
    nombre: String
})

module.exports = mongoose.model('Estado', EstadoSchema)