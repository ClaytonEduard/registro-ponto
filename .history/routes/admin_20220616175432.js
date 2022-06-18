const express = require("express");
const { route } = require("express/lib/application");
const { param } = require("express/lib/request");
const req = require("express/lib/request");
//componente para criar rotas separadas
const router = express.Router();
//carregando o mongo
const mongoose = require("mongoose");
//carregando os dados dos usuários
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
require('../models/Ponto')
const Ponto = mongoose.model('pontos')

require("../models/Usuario")
//definindo as rotas
router.get("/admin", (req, res) => {
    res.send("Pagina principal do painel ADM");
    res.render("admin/index");
});

// listando os usuarios cadastrados
router.get("/usuarios", (req, res) => {
    Usuario.find().then((usuarios) => {
        res.render("admin/usuarios", {
            usuarios: usuarios,

        });
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar os usuários!");
        res.redirect("/admin");
    })
})


router.get("/pontos", (req, res) => {

    Ponto.find().then((pontos) => {
        var pegar = new Array;

        var Ponto = new Array;
        Ponto = pontos.map(function (e) { return e });

        function obterRegistroPorUsuario(pontos, id) {
            //console.log("Registro por usuario")
            return pontos.filter((ponto) => ponto.id === id)
        }

        function obterIdsUnicosParaPontos(pontos) {
            const ids = new Map()
            pontos.forEach((ponto) => ids.set(ponto.id, ponto.id));
            //console.log("Obter ids unicos: ")
            //console.log(ids)
            return ids;

        }
        // obtenho o id, o tipo, e a matricula
        function obterPonto(pontos, id, tipo, matricula) {
            const ponto = pontos.find((ponto) => (ponto === null || ponto === void 0 ? void 0 : ponto.id) === id && tipo === (ponto == null || ponto === void 0 ? void 0 : ponto.tipo) && matricula === (ponto == null || ponto === void 0 ? void 0 : ponto.matricula))
            console.log(ponto)
            return ponto
        }

        function obterRelatorio(pontos) {
            // objeto com IDs
            const mapIds = obterIdsUnicosParaPontos(pontos)
            // vetor somente com os ids
            const idsUnico = [...mapIds.values()]
            // retatorio com array vazio
            const relatorio = []

            let indice = 0;
            // passa no bando n vezes
            while (idsUnico[indice]) {

                const registrosDoUsuario = obterRegistroPorUsuario(pontos, idsUnico[indice]);
                //console.log(registrosDoUsuario)
                let indiceDois = 0;

                while (registrosDoUsuario[indiceDois]) {

                    const idAtual = registrosDoUsuario[indiceDois].id;
                    const matriculaAtual = registrosDoUsuario[indiceDois].matricula
                    const proximoId = registrosDoUsuario[indiceDois].id + 1;
                    const tipoEntrada = '0';
                    const tipoSaida = '1';
                    const par = 2;
                    const entrada = obterPonto(pontos, idAtual, tipoEntrada, matriculaAtual);
                    console.log(entrada);
                    const saida = obterPonto(pontos, proximoId, tipoSaida, matriculaAtual);
                    console.log(saida)
                   if(entrada.matricula ==)
                        const registro = { entrada, saida };
                        (entrada || saida) && relatorio.push({ registro });
                        indiceDois = indiceDois + par;
                    
                    

                }
                indice++;
            }
            return relatorio;
        }
        console.log(obterRelatorio(pontos));

        // let ver = []
        // let out = []
        // for (let i = 0; i < pegar.length; i++) {

        //     if (pegar[i].numeroregistro == i) {
        //         ver.push(pegar[i])
        //     }

        // }


        res.render('admin/pontos', {
            pontos: pontos
        })
    })
})


//exporta o modulo

module.exports = router;