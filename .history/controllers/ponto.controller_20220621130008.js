const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        // contando quantide de ponstos por matricula
        const total = await Ponto.find({
            matricula: body.matricula,
        }).count();
        console.log("Matricula: " + body.matricula + " : " + total)
            // captura todos os ponto da matricula
        const pontoArray = await Ponto.find({
            matricula: body.matricula,
            //id: total,
        })
        console.log("Ponto Lugar: " + pontoArray)
            // armazena o ultimo do array referente a matricula
        var ultimoPonto = pontoArray.pop();
        console.log("Ponto ultimo Adcionado: " + ultimoPonto)
        console.log("--------------------");
        if (ultimoPonto == null) {
            const novoPonto = new Ponto({
                matricula: body.matricula,
            });
            console.table("Ponto aberto : null" + novoPonto)
            return await novoPonto.save()
        }

        if (ultimoPonto.matricula == body.matricula && ultimoPonto.fechado == false) {
            // console.log("Ultimo ponto tipo :" + ultimoPonto.tipo)
            const novoPonto = ultimoPonto({
                //matricula: body.matricula,
                fechado: true,
                datafechamento: Date.now(),
            });
            console.table("Ponto fechado" + novoPonto)
            return await novoPonto.save()
        } else {
            const novoPonto = new Ponto({
                matricula: body.matricula,
            });
            console.table("Ponto aberto: NORMAL" + novoPonto)
            return await novoPonto.save()
        }

    }

}