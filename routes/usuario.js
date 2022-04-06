const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

// metodo post do registro..

var checkboxs = document.querySelectorAll('.checkbox')
router.post("/registro", (req, res) => {
  /*  const novoUsuario = new Usuario({
    matricula: req.body.matricula,
    senha: req.body.senha,
    eAdmin: req.body.eAdmin,
  });
  novoUsuario.save(); */
  console.log(req.body.matricula +" "+ req.body.senha +" "+ req.body.eAdmin);
});

router.get("/registro", (req, res) => {
  res.render("usuarios/registro");
});

// rota do formulario de login

router.get("/login", (req, res) => {
  res.render("usuarios/login");
});

module.exports = router;
