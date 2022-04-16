//criando as dependecias do banco
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//definindo o nome conjunto que será criando no servidos
const RegistroPonto = new Schema({
    matricula: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});


mongoose.model('registroPonto', REegistroPonto)