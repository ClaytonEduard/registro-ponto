const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async(body) => {
        // contando quantide de ponstos por matricul        
        const total = await Ponto.find({
            matricula: body.matricula,
        }).count();
        console.log("Matricula: " + body.matricula + " : " + total)
            // captura todos os ponto da matricula
        const fech = false
        const pontoArray = await Ponto.find({
            matricula: body.matricula,
            fechado: fech,
            //id: total,
        })
        console.log("Ponto ultimo Adcionado: " + pontoArray)
        console.log("--------------------");
        if (pontoArray == null) {
            const novoPonto = new Ponto({
                matricula: body.matricula,
            });
            console.table("Ponto aberto : null" + novoPonto)
            return await novoPonto.save()
        }
        console.log("Ponto Lugar: " + pontoArray)
            // armazena o ultimo do array referente a matricula
        var ultimoPonto = pontoArray.pop();

        const mat = ultimoPonto.matricula;
        console.log("Matricula : " + mat);
        const pontof = ultimoPonto.fechado;
        console.log("Fechado : " + pontof);
        const op = { upsert: true };
        if (pontoArray.matricula == body.matricula && pontoArray.fechado == false) {
            // console.log("Ultimo ponto tipo :" + ultimoPonto.tipo)

            const filter = {
                matricula: mat,
            }
            console.log(filter);
            const update = {
                fechado: true,
                datafechamento: Date.now(),
            }
            console.log(update);
            console.table("Ponto fechado: ")
            return await Ponto.findOneAndUpdate(filter, update, op);
        } else {
            const novoPonto = new Ponto({
                matricula: body.matricula,
            });
            console.table("Ponto aberto: NORMAL" + novoPonto)
                // return await novoPonto.save()
        }

    }

}