const router = require('express').Router();
const User = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('@hapi/joi')


const schemaRegister = Joi.object({
    documento_identidad: Joi.string().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    correo: Joi.string().required().email(),
    password: Joi.string().required()
})

const schemaLogin = Joi.object({
    correo: Joi.string().required().email(),
    password: Joi.string().required()
})
router.post('/login', async (req, res) => {
    const {error} = schemaLogin.validate(req.body)
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    const user = await User.findOne({
        correo: req.body.correo
    })

    if(!user){
        return res.status(400).json({
            error: true,
            mensaje: 'Usuario no registrado'
        })
    }

    const passwordValida =  await bcrypt.compare(req.body.password, user.password)
    if(!passwordValida){
        return res.status(400).json({error:true, mensaje:'Credenciales incorrectas'})
    }


    const token = jwt.sign({
        nombre: user.nombre,
        documento_identidad: user.documento_identidad
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: false,
        data: {token}
    })

    
})


router.post('/register', async(req, res) =>{
    const {error} = schemaRegister.validate(req.body)
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    const existeEmail = await User.findOne({
        correo: req.body.correo
    })
    if(existeEmail){
        return res.status(400).json({
            error: true,
            mensaje: 'email ya registrado'
        })
    }

    const saltos = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, saltos)
    
    const usuario = new User({
        documento_identidad: req.body.documento_identidad,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        roles: ['estudiante'],
        correo: req.body.correo,
        password: password
    })

    try{
        const usuarioDB = await usuario.save()
        res.json({
            error: null,
            data: usuarioDB
        })

    }catch (error){
        res.status(400).json(error)

    }
    
})

module.exports = router;