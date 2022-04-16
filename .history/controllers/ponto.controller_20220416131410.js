const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const aux = '';
        const ultimoPonto = await Ponto.findOne({
            matricula: body.matricula
        }).getQuery({})
        if (ultimoPonto) {

        }

        const novoPonto = new Ponto({
            matricula: body.matricula,
        })
        await novoPonto.save()
    }
}