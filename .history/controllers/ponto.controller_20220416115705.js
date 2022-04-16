const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const ultimoPonto = await Ponto.findOne({ matricula: body.matricula })

        const novoPonto = new Ponto({
            matricula: body.matricula,
            if (ultimoPonto.tipo == '0') {

            }
        })
        await novoPonto.save()
    }
}