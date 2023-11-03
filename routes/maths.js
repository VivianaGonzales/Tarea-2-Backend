const express = require ('express')
const router = express.Router()
const mathsController = require('../controllers/mathsController')

router.get('/dividir',mathsController.dividirGet)
router.get('/sumar',mathsController.sumarGet)
router.get('/par',mathsController.parGet)

module.exports = router