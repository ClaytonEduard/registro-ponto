const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");
//importar controller
const usuariocontroller = require('../controllers/usuario.controller')
    //rota de cadastro
router.get("/registro", (req, res) => {
    res.render("usuarios/registro");
});
//cadastro de usuario
router.post("/registro", async(req, res) => {
    await usuariocontroller.cadastrar(req.body)

    /* var erros = [];
    if (!req.body.matricula ||
        typeof req.body.matricula == undefined ||
        req.body.matricula == null
    ) {
        erros.push({ Number: "Matricula inválida" });
    }
    if (!req.body.senha ||
        typeof req.body.senha == undefined ||
        req.body.senha == null
    ) {
        erros.push({ Number: "Senha inválida" });
    }
    if (req.body.senha.length < 4) {
        erros.push({ Number: "Senha muito curta" });
    }
    if (erros.length > 0) {
        res.render("usuarios/registro", { erros: erros });
    } else {
        Usuario.findOne({ matricula: req.body.matricula })
            .then((usuario) => {
                if (usuario) {
                    req.flash("error_msg", "Já existe uma conta com essa matricula: ");
                    res.redirect("/usuarios/registro");
                } else {
                    if (req.body.eAdmin == undefined || req.body.eAdmin != 1) {
                        req.body.eAdmin = 0;
                    }
                    const novoUsuario = new Usuario({
                        matricula: req.body.matricula,
                        senha: req.body.senha,
                        eAdmin: req.body.eAdmin,
                    });
                    novoUsuario
                        .save()
                        .then(() => {
                            req.flash("success_msg", "Usuário criado com sucesso");
                            res.redirect("/login");
                        })
                        // console.log("novo user " + novoUsuario.eAdmin);
                        .catch((err) => {
                            req.flash(
                                "error_msg",
                                "Houve um erro ao criar um usuário, tente novamente" + err
                            );
                            res.redirect("/usuarios/registro");
                        });
                }
            })
            .catch((err) => {
                req.flash("error_msg", "Houve um erro interno: " + err);
                res.redirect("/");
            });
    } */
    res.status()
});
// rota do formulario de login
router.get("/ponto", (req, res) => {
    res.render("usuarios/ponto");
});


module.exports = router;