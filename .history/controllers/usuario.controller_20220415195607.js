const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

module.exports = {
    cadastrar: (body) => {
        var erros = [];
        if (!body.matricula ||
            typeof body.matricula == undefined ||
            body.matricula == null
        ) {
            erros.push({ Number: "Matricula inválida" });
        }
        if (!body.senha ||
            typeof body.senha == undefined ||
            body.senha == null
        ) {
            erros.push({ Number: "Senha inválida" });
        }
        if (body.senha.length < 4) {
            erros.push({ Number: "Senha muito curta" });
        }
        if (erros.length > 0) {
            res.render("usuarios/registro", { erros: erros });
        } else {
            Usuario.findOne({ matricula: body.matricula })
                .then((usuario) => {
                    if (usuario) {
                        flash("error_msg", "Já existe uma conta com essa matricula: ");
                        res.redirect("/usuarios/registro");
                    } else {
                        if (body.eAdmin == undefined || body.eAdmin != 1) {
                            body.eAdmin = 0;
                        }
                        const novoUsuario = new Usuario({
                            matricula: body.matricula,
                            senha: body.senha,
                            eAdmin: body.eAdmin,
                        });
                        novoUsuario
                            .save()
                            .then(() => {
                                flash("success_msg", "Usuário criado com sucesso");
                                res.redirect("/login");
                            })
                            // console.log("novo user " + novoUsuario.eAdmin);
                            .catch((err) => {
                                flash(
                                    "error_msg",
                                    "Houve um erro ao criar um usuário, tente novamente" + err
                                );
                                res.redirect("/usuarios/registro");
                            });
                    }
                })
                .catch((err) => {
                    flash("error_msg", "Houve um erro interno: " + err);
                    res.redirect("/");
                });
        }
    }
}