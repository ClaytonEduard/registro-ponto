//criando as dependecias do banco
const mongoose = require("mongoose");
const Schema = mongoose.Schema, autoIncrement = require('mongoose');
//definindo o nome conjunto que será criando no servidos
const Ponto = new Schema({

    id: {
        type: Schema.ObjectId,
        auto: true,
    },
    /*  numeroregistro: {
         type: Number,   
         required: true,
         default: 0
     }, */
    matricula: {
        type: Number,
        required: true,
    },
    datalancamento: {
        type: Date,
        default: Date.now()
    },
    tipo: {
        type: String,
        default: 0,
    },

});

mongoose.model("pontos", Ponto);