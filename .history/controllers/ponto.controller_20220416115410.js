const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        const ultimoPonto = WebGLActiveInfo


        const novoPonto = new Ponto({
            matricula: body.matricula,
        })
        await novoPonto.save()
    }
}