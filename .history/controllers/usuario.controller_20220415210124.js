const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

module.exports = {
    // async tem a possiblidade de executar passo a posso esperando o resultado.

    cadastrar: async(body) => {
        const usuarioEncontrado = await Usuario.findOne({ matricula: body.matricula })
        if (usuarioEncontrado) {
            throw new Error('Já existe uma conta com essa matricula:')
                //res.redirect("/usuarios/registro");
        }

        const novoUsuario = new Usuario({
            matricula: body.matricula,
            senha: body.senha,
            eAdmin: body.eAdmin,
        });
        await novoUsuario.save()



        /*  .then((usuario) => {
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
        } */
    }
}