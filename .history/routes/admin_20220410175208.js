const express = require("express");
const { route } = require("express/lib/application");
const req = require("express/lib/request");
//componente para criar rotas separadas
const router = express.Router();
//carregando o mongo
const mongoose = require("mongoose");
//carregando os dados dos usuários
//const Usuario = mongoose.model("usuario");

//definindo as rotas
router.get("/", (req, res) => {
    res.send("Pagina principal do painel ADM");
    res.render("admin/index");
});

router.get("/", (req, res) => {
    res.send("Pagina principal do painel ADM");
    res.render("admin/index");
});

//exporta o modulo
module.exports = router;