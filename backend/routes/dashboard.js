const verifyToken = require('./validate-token');

const router = require('express').Router();

router.get('/', (req, res) =>{
    res.json({
        error: false,
        data: {
            title: 'Mi ruta protegida',
            user: req.user
        }
    })
})

module.exports = router