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
        const mat = ultimoPonto.matricula;
        console.log(mat)
        const pontof = ultimoPonto.fechado;
        const op = { upsert: true };
        if (ultimoPonto.matricula == body.matricula && ultimoPonto.fechado == false) {
            // console.log("Ultimo ponto tipo :" + ultimoPonto.tipo)

            const filter = {
                matricula: mat,
            }
            const update = {
                fechado: true,
                datafechamento: Date.now(),
            }
            let doc;
            console.table("Ponto fechado: " + doc)
            return await Ponto.findOneAndUpdate(filter, update, op);
        } else {
            const novoPonto = new Ponto({
                matricula: body.matricula,
            });
            console.table("Ponto aberto: NORMAL" + novoPonto)
            return await novoPonto.save()
        }

    }

}