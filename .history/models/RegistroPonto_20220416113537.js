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
    eAdmin: {
        type: String,
        default: 0,
    },

});

mongoose.model('registroPonto', RegistroPonto)