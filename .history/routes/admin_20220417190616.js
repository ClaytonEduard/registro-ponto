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

        var pontoFiltrado = pontos.map((item, indice, array) => {

                return {
                    matricula: item.matricula,
                    tipo: item.tipo,
                    datalancamento: item.datalancamento.toString("pt-BR"),
                    position: indice
                }
            })
            //console.table(pontoFiltrado)
        var test = [
            [],
            []
        ]
        var vet
        for (let i = 0; i <= pontoFiltrado.length; i++) {
            test.push(pontoFiltrado[i])

            for (let j = i; j < pontos.length; j++) {
                vet = pontos[j]
                    //console.table("for J :" + vet)
            }
        }
        //console.table("for I :" + test)







        function ponto(item) {
            return [item.datalancamento, item.matricula, item.tipo].join(' - ')
        }
        //console.table(pontos.map(ponto))


        res.render('admin/pontos', {
            pontos: pontos
        })
    })
})


//exporta o modulo
module.exports = router;