const db = require('../models')
const Tutoria = db.tutoria
const Joi = require('@hapi/joi');


typeValidationsSolicitudTutorias = (req, res, next) => {
    const SchemaSolicitudTutorias = Joi.object({
        estudiante: Joi.required(),
        curso: Joi.required(),
        info_encuentro: Joi.required(),
        fecha_agendamiento: Joi.required()
    });

    const {error} = SchemaSolicitudTutorias.validate(req.body);
    if (error){
        return res.status(400).json({
            mensaje: error.details[0].message,
            error: true,
      });
    }
    next();
    
}

checkDuplicateTutoria = (req, res, next) => {
    Tutoria.findOne({
        fecha_agendamiento: req.body.fecha_agendamiento,
    }).exec((err, tutoria) => {
        if (err) {
            res.status(500).json({ error: true, mensaje: err });
            return;
          }
      
          if (tutoria) {
            res.status(400).json({error: true, mensaje: "NO PUEDE AGENDAR MÁS TUTORÍAS EN EL MISMO HORARIO" });
            return;
          }
      
          next();
    })
}

module.exports = Object.freeze({
    typeValidationsSolicitudTutorias,
    checkDuplicateTutoria
})
