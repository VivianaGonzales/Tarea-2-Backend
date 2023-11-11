const express = require ('express')
const router = express.Router()
const {lista} = require ('../controllers/listController')

router.get('/lista', lista)

module.exports = router