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
            datalancamento: 'desc',
        }).then((pontos) => {
            pontos:
        })
        let array = new Array
        array = ultimoPonto
        console.log(array)
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