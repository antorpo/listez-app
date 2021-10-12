const db = {};
db.usuario = require("./Usuario");
db.rol = require("./Rol");
db.ROLES = ["estudiante", "tutor", "admin"];

module.exports = db;