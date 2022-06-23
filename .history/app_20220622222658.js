//carregando modulos
const express = require("express");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
Handlebars.registerHelper('dateFormat', require('handlebars-date-format'));
const app = express();
// constante para mapear as rotas
const admin = require("./routes/admin");
//configurando o bootstrap
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
//carregar os modulos
require("./models/Usuario")
const Usuario = mongoose.model("usuarios")
const usuarios = require("./routes/usuario");

require('./models/Ponto')
const Ponto = mongoose.model('pontos')
const pontos = require('./routes/usuario')

app.use(
    session({
        secret: "RegistroPonto",
        resave: true,
        saveUninitialized: true,
    })
);
//configurar a sesão dos Midllewares
//flash
app.use(flash());

//Midllewares
app.use((req, res, next) => {
    //variaveis globais usa-se o .locals
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    //variavel global para erro de login
    //res.locals.error = req.flash("error");
    // armazena os dados do usuario logado
    //res.locals.user = req.user || null;
    next();
});
//sessão
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Handlebars
app.engine(
    "handlebars",
    exphbs.engine({
        defaultLayout: "main",
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        helpers: require('./helpers/helpers.js')
    })
);

app.set("view engine", "handlebars");

//Mongoose conexao com o banco de dados
mongoose.connect("mongodb://localhost/registroponto")
    .then(() => {
        console.log("Conectado ao mongo");
    })
    .catch((err) => {
        console.log("Erro ao se conectar:" + err);
    });

//Public
//todas as definições de css e outros estão na pasta public
app.use(express.static("./public"));


// criando o Midlleware
//rotas

// 2° pagina de erro
app.get("/404", (req, res) => {
    res.send("erro 404!");
});

// rota de visualização de users cadastrados

app.get("/index", (req, res) => {
    res.render('admin/index')
})


app.get("/login", function(req, res) {
    //  res.send('Novo olá mundo!');
    res.render("login");
});

//carregado as routes
app.use("/admin", admin);
app.use("/usuarios", usuarios);

//server local
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando!");
});