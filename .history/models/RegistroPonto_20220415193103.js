//criando as dependecias do banco
const mongoose = require("mongoose");

//definindo o nome conjunto que será criando no servidos
const registroPonto = Schema({
    matricula: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});


mongoose.model('registroPonto', registroPonto)