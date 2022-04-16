const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");
const { body, validationResult } = require('express-validator');
//importar controller
const usuariocontroller = require('../controllers/usuario.controller')
    //rota de cadastro
router.get("/registro", (req, res) => {
    res.render("usuarios/registro");
});




//cadastro de usuario
router.post("/registro", body('matricula'), async(req, res) => {
    try {
        await usuariocontroller.cadastrar(req.body)
        req.flash("success_msg", "Usuário criado com sucesso");
        res.redirect("/login");
    } catch (error) {
        req.flash("error_msg", error.message);
        res.redirect("/usuarios/registro");
    }
});
// rota do formulario de login
router.get("/ponto", (req, res) => {
    res.render("usuarios/ponto");
});


module.exports = router;