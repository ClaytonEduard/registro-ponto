//criando as dependecias do banco
const mongoose = require("mongoose");

//definindo o nome conjunto que será criando no servidos
const registroPonto = new mongoose.Schema({
    matricula: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});


mongoose.model('restroPonto, )