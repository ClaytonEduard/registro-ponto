const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const aux = '';
        const ultimoPonto = await Ponto.find({
            matricula: body.matricula
        }).getQuery({ datalancamento: "desc" })
        if (ultimoPonto.tipo == 0) {

            console.log(novoPonto.tipo)
            const novoPonto = new Ponto({
                matricula: body.matricula,
                novoPonto: tipo = 1
            })
            console.log(novoPonto)
            await novoPonto.save()



        }


    }
}