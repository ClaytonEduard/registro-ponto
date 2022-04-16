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



    }
}