const express = require("express");
const { route } = require("express/lib/application");
const req = require("express/lib/request");
//componente para criar rotas separadas
const router = express.Router();
//carregando o mongo
const mongoose = require("mongoose");
//carregando os dados dos usuários
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")

require("../models/Usuario")
    //definindo as rotas
router.get("/admin", (req, res) => {
    res.send("Pagina principal do painel ADM");
    res.render("admin/index");
});

// listando os usuarios cadastrados
router.get("/usuarios", (req, res) => {
Usuario.find().then((usuarios) => {
    for (let i = 0; i <= usuarios.length; i++) {
        if (usuarios.eAdmin[i] == '1') {
            usuarios.eAdmin[i] = "Administrador"
        } else {
            usuarios.eAdmin[i] = "Comum"
        }
        console.log(usuarios[i]);

    }
    /  res.render("admin/usuarios
    ", {
    usuarios: usuarios,

});
}).catch((err) => {
req.flash("error_msg", "Houve um erro ao listar os usuários!");
res.redirect("/admin");
})
})



//exporta o modulo
module.exports = router;