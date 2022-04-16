const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const aux = '';
        const ultimoPonto = await Ponto.findOne({
            matricula: body.matricula,
        }).sort({ datalancamento: "desc" })
        let array = new Array
        array = ultimoPonto
        console.log(array)
        if (ultimoPonto.tipo == '0') {
            console.log(ultimoPonto.tipo)
            const novoPonto = new Ponto({
                matricula: body.matricula,
                : body.ponto = 1
            });
            console.table(novoPonto + "ponto fechado")
                //await novoPonto.save()
        } else {
            const novoPonto = new Ponto({
                matricula: body.matricula,
            });
            console.table(novoPonto + "ponto aberto")
                // await novoPonto.save()
        }
        // console.log(novoPonto.tipo)



    }
}