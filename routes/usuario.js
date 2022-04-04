const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");




router.get("/registro", (req, res) => {
    res.render("usuarios/registro");
  });


// rota do formulario de login

router.get("/login", (req, res) => {
    res.render("usuarios/login");
  });



  module.exports = router;