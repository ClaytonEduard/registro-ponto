//criando as dependecias do banco
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connect = mongoose.createConnection('mongodb://localhost/registroponto')
const AutoIncrementFactory = require('mongoose-sequence');
const AutoIncrement = AutoIncrementFactory(connect)

//definindo o nome conjunto que será criando no servidos
const Ponto = new Schema({

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
    // a ideia agora e criar uma propriedade abrir ponto e fechou ponto dentro do proprio obejto
});
Ponto.plugin(AutoIncrement, { inc_field: 'id' });

mongoose.model("pontos", Ponto);