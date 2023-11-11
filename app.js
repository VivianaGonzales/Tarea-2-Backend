const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())

const usersRouter = require('./routes/users')
const mathsRouter = require('./routes/maths')
const listRouter = require('./routes/list')

app.use('/users',usersRouter)
<<<<<<< HEAD
app.use('/maths',mathsRouter)
app.use('/list',listRouter)
=======
app.use('./maths',mathsRouter)
app.use('./list',listRouter)
>>>>>>> 106488f829272fdc1451785916b62fc557563b44

app.post('/', (req, res) => {
    const nombre = req.body.nombre;
    res.json({
      nombre,
      status: 'success'
    });
})

module.exports = app
