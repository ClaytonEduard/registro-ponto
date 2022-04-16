const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const aux = '';
        const ultimoPonto = await Ponto.findOne({
            matricula: body.matricula,
        }).getFilter({
            datalancamento: 'desc',
        })
        const array = ultimoPonto
        console.log(args)
        if (ultimoPonto.tipo == 0) {
            throw console.log(ultimoPonto.tipo)
        }
        // console.log(novoPonto.tipo)
        const novoPonto = new Ponto({
            matricula: body.matricula,
            //novoPonto: tipo = 1
        });
        //await novoPonto.save()


    }
}