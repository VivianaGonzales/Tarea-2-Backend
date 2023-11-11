const lista = (req, res) =>{
        res.json({
            producto1: 'Pan',
            producto2: 'queso',
            producto3: 'gaseosa',
            producto4: 'fideos',
            producto5: 'frutas'
        })
    }

module.exports = {lista}