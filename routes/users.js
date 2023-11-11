const express = require ('express')
const router = express.Router()
const {saludo} = require('../controllers/usersController')

router.get('/:name/:lastname', saludo)

module.exports = router