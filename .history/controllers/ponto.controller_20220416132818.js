const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const aux = '';
        const ultimoPonto = await Ponto.findOne({
            matricula: body.matricula
        }).getQuery({ datalancamento: "desc" })
        if (ultimoPonto.tipo == '0') {
            novoPonto.tipo = '1'
            console.log(novoPonto.tipo)




        }

        const novoPonto = new Ponto({
                matricula: body.matricula,
            })
            //await novoPonto.save()
    }
}