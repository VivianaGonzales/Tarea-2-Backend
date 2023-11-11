const mathsController = {

    dividirGet(req,res){
    let divisor = Number(req.params.divisor);
    let dividendo = Number(req.params.dividendo);
    if (divisor === 0 || dividendo === 0)
        return res.json({error: "No se puede dividir por cero"});

    let resultado = divisor / dividendo;
    res.json({resultado: resultado});
},

    sumarGet(req,res){
    let numero1 = Number(req.params.numero1);
    let numero2 = Number(req.params.numero2);

    if(numero1 < 0 || numero2 < 0)
        return res.json({error: "Por favor ingresá un numero mayor a cero"});

    let resultado = numero1 + numero2;
    res.json({resultado: resultado})
},

    parGet(req, res){
    let numero3 = Number(req.params.numero3);
    
    if(numero3 % 2 == 0)
    return res.send("Autorizado");
    
    res.send("No autorizadooooooo");
    }
}


module.exports = mathsController