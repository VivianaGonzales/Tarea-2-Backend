const usersController = (req,res)=> {
    // userGet(req,res){
    let name = req.params.name;
    let lastName = req.params.lastname;
    res.send(`Hola ${name} ${lastName}`)
}


module.exports = usersController