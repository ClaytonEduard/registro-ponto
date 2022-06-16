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

        var pontoFiltrado = pontos.map((item, indice) => {
            return {
                matricula: item.matricula,
                tipo: item.tipo,
                datalancamento: item.datalancamento.toString("pt-BR"),
                position: indice
            }

        })
        const map = new Map(Object.entries(pontos))
            //const arr = Array.from(map)
            //console.log(map)
        console.log(map.size)
            // console.log(arr)
            //console.table(pontoFiltrado)
            //  let mapPega = []
            /
            /map.forEach((value, keys, map) => {
            // console.log(keys + " - " + value)
            //mapPega.push((map))
            //  for (const [keys, value] of map) {
            // console.log(`${keys}: ${value}`)
            // for (let i = 0; i < keys.length; i++) {
            // mapPega.push(value)
            //  }
            // }

        //});
        //  console.table(mapPega)








        /*  for (const user of pontos.entries()) {
            console.log(pontos)
        }


        function ponto(item) {
            return [item.datalancamento, item.matricula, item.tipo].join(' - ')
        }
        // console.table(pontos.map(ponto))
 */

        res.render('admin/pontos', {
            pontos: pontos
        })
    })
})


//exporta o modulo

module.exports = router;