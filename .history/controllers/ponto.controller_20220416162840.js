const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const aux = '';
        const ultimoPonto = await Ponto.find({
            matricula: body.matricula,
        }).getFilter({
            datalancamento: 'desc ',
        })
        var args = JSON.stringify(ultimoPonto)
        console.table(ar)
        if (ultimoPonto.tipo != 0) {
            throw console.log(novoPonto.tipo)
        }
        // console.log(novoPonto.tipo)
        const novoPonto = new Ponto({
            matricula: body.matricula,
            //novoPonto: tipo = 1
        });
        //await novoPonto.save()


    }
}