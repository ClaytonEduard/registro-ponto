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
                    var pegar = new Array

                    var Ponto = new Array
                    Ponto = pontos.map(function(e) { return e });

                    function obterRegistroPorUsuario(pontos, id) {
                        return pontos.filter((ponto) => ponto.id === id)

                    }

                    function obterIdsUnicosParaPontos(pontos) {
                        const ids = new Map()
                        pontos.forEach((ponto) => ids.set(ponto.id, ponto.id));
                        return ids;

                    }

                    function obterPonto(pontos, incremento, tipo) {
                        const ponto = pontos.find((ponto) => (ponto === null || ponto === void 0 ? void 0 : ponto.incremento) === incremento && tipo === (ponto == null || ponto === void 0 ? void 0 : ponto.tipo))
                        return console.log(ponto
                        }

                        function obterRelatorio(pontos) {
                            const mapIds = obterIdsUnicosParaPontos(pontos)
                            const idsUnico = [...mapIds.values()]
                            const relatorio = []
                            let indice = 0;

                            while (idsUnico[indice]) {

                                const registrosDoUsuario = obterRegistroPorUsuario(pontos, idsUnico[indice]);
                                let indiceDois = 0;

                                while (registrosDoUsuario[indiceDois]) {

                                    const incrementoAtual = registrosDoUsuario[indiceDois].incremento;
                                    const proximoIncremento = registrosDoUsuario[indiceDois].incremento + 1;
                                    const tipoEntrada = 1;
                                    const tipoSaida = 2;
                                    const par = 2;
                                    const entrada = obterPonto(pontos, incrementoAtual, tipoEntrada);
                                    const saida = obterPonto(pontos, proximoIncremento, tipoSaida);
                                    const registro = { entrada, saida };
                                    (entrada || saida) && relatorio.push({ registro });
                                    indiceDois = indiceDois + par;
                                }
                                indice++;
                            }
                            return relatorio;
                        }
                        console.log(obterRelatorio(pontos));


                        // console.log(pontos)
                        //retorna a lista de objetos
                        pegar = pontos.map(function(e) { return e })
                            //console.log(pegar)


                        let ver = []
                        let out = []
                        for (let i = 0; i < pegar.length; i++) {

                            if (pegar[i].numeroregistro == i) {
                                ver.push(pegar[i])
                            }


                            //console.log(ver)

                            /*  for (let j = i; j < o; j++) {
                                 ver.push(pegar[i].matricula)
                                 console.log(" j :" + j + "- " + ver)
                             } */



                        }
                        //console.log("VER: " + ver)
                        //console.log("OUT: " + out)

                        /* var pontoFiltrado = pontos.map((item, indice) => {
                            return {
                                matricula: item.matricula,
                                tipo: item.tipo,
                                datalancamento: item.datalancamento.toString("pt-BR"),
                                position: indice
                            }

                        })
                        const map = new Map(Object.entries(pontos))
                        const novoMap = new Map();
                        for (const ponto of pontos) {
                            const { numeroregistro } = ponto;
                            novoMap.set(numeroregistro, {...ponto })
                        }
                        console.log(novoMap)
                            //console.log("Tamanho do array: " + map.size)
                        for (const maps of novoMap) {
                            //   console.log(maps)
                        }



                        let r = {};
                        for (const t of map.values()) {
                            r = map.values()
                        } */
                        //console.log(r)

                        // console.log(arr)
                        //console.table(pontoFiltrado)
                        //  let mapPega = []

                        //map.forEach((value, keys, map) => {
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









                        //   function ponto(item) {
                        //       return [item.datalancamento, item.matricula, item.tipo].join(' - ')
                        //   }
                        // console.table(pontos.map(ponto))



                        res.render('admin/pontos', {
                            pontos: pontos
                        })
                    })
            })


        //exporta o modulo

        module.exports = router;