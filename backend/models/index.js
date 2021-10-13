const db = {};
db.usuario = require("./Usuario");
db.rol = require("./Rol");
db.tutoria = require('./Tutoria');
db.tutor =  require('./Tutor');
db.solicitud_tutor = require('./SolicitudTutor');
db.estado = require('./Estado');
db.curso = require('./Curso');
db.ROLES = ["estudiante", "tutor", "admin"];

module.exports = db;