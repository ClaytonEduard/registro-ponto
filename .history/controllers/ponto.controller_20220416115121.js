const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastra: async(body) => {
        const novoPonto = new Ponto({
            matricula: body.matricula,
        })

    }
}