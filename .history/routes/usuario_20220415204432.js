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
router.post("/registro",
    body('matricula', 'Informe somente numeros').isNumeric(),
    body('senha', 'A senha deve ser igual ou maior de cinco caracteres').isLength({ min: 5 }),
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let msg = err
            res.render("usuarios/registro", { erros: errors.array() });
            console.log(errors.array())
            return
        }
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
module.exports = router;