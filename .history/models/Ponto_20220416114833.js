//criando as dependecias do banco
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//definindo o nome conjunto que será criando no servidos
const Ponto = new Schema({
    maa: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    tipo: {
        type: String,
        default: 0,
    }

});

mongoose.model('pontos', Ponto)