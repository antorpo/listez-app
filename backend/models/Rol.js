const mongoose = require("mongoose");

const RolSchema = mongoose.Schema({
  nombre: String,
});

const Rol = mongoose.model("Rol", RolSchema);

module.exports = Rol;
