const express = require ('express')
const router = express.Router()
const users = require ('../controllers/usersController')
const usersController = require('../controllers/usersController')

router.get('/users',usersController)

module.exports = router