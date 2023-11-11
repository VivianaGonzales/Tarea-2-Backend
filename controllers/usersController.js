    const saludo = (req,res)=> {
    let name = req.params.name;
    let lastName = req.params.lastname;
    res.send(`Hola ${name} ${lastName}`)
}

module.exports = {saludo}