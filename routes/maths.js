const express = require ('express')
const router = express.Router()
const mathsController = require('../controllers/mathsController')

router.get('/dividir/:divisor/:dividendo', mathsController.dividirGet) 
router.get('/sumar/:numero1/:numero2', mathsController.sumarGet)
router.get('/par/:numero3', mathsController.parGet)

module.exports = router