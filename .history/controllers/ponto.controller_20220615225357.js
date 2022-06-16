const mongoose = require('mongoose')
require('../models/Ponto')
const Ponto = mongoose.model('pontos')


module.exports = {

    // modulo cadastrar 
    cadastrar: async (body) => {
        // contando quantide de ponstos por matricula
        const total = await Ponto.find({
            matricula: body.matricula,
        }).count();
        console.log(total)

        const pontoArray = await Ponto.find({
            matricula: body.matricula,
        }).sort({total:'-1'})
        console.log(""pontoArray)

        // var ultimoPonto = pontoArray[0]
        // console.log(ultimoPonto)

        // if (ultimoPonto == null) {
        //     const novoPonto = new Ponto({
        //         id: total,
        //         matricula: body.matricula,
        //     });
        //     console.table("Ponto aberto : null" + novoPonto)
        //     return await novoPonto.save()
        // }

        // if (ultimoPonto.matricula == body.matricula && ultimoPonto.tipo == '0') {
        //     console.log(ultimoPonto.tipo)
        //     const novoPonto = new Ponto({
        //         id: total,
        //         matricula: body.matricula,
        //         tipo: body.tipo = 1
        //     });
        //     console.table("Ponto fechado" + novoPonto)
        //     return await novoPonto.save()
        // } else {
        //     const novoPonto = new Ponto({
        //         id: total,
        //         matricula: body.matricula,
        //     });
        //     console.table("Ponto aberto: NORMAL" + novoPonto)
        //     return await novoPonto.save()
        // }


        const novoPonto = new Ponto({
            //id: total,
            matricula: body.matricula,
            tipo: body.tipo = 0
        });
        console.table("Ponto Aberto" + novoPonto)
        //return await novoPonto.save()
    }

}
    //console.log(novoPonto.tipo)


