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
    let numero1 = Number(req.params.num1);
    let numero2 = Number(req.params.num2);

    if(numero1 < 0 || numero2 < 0)
        return res.json({error: "Por favor ingresá un numero mayor a cero"});

    let result = numero1 + numero2;
    res.json({resultado: result})
},

    parGet(req, res){
    let numero = Number(req.query.num);

    if(numero % 2 !== 0)
        return res.send('enegado, número impar');

    res.send('Autorizado, es número par');
}
}


module.exports = mathsController