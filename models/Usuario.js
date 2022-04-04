//criando as dependecias do banco
const mongoose = require("mongoose");

//definindo o nome conjunto que será criando no servidos
const UsuarioSchema = new mongoose.Schema({
  matricula: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  eAdmin: {
    type: String,
    default: 0,
  },
  senha: {
    type: String,
    requiredPaths: true,
  },
});


mongoose.model('usuarios', Usuario)
