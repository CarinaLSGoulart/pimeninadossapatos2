const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')

/* ===== Biblioteca ===== */
app.use(express.json());

/* =========== Routes =========== */
const routesHome = require('./routes/home');
const dadosDePagamento = require('./routes/dadosDePagamento');
const routerenderecoDeEntrega = require('./routes/enderecoDeEntrega');
const routesUsuario = require('./routes/usuario');
const routesPedido = require('./routes/pedido');
const routesPoliticas = require('./routes/politicas');
const routesProduto = require('./routes/produto');
const routesProdutos = require('./routes/produtos');
const routesSacola = require('./routes/sacola');


/* Log */
let logmiddleware = require('./middlewares/logSite')
app.use(logmiddleware)

app.use(session({secret: 'MeninaDosSapatos'}))

app.use('/', routesHome);
app.use('/login', routesUsuario);
app.use('/sacola', routesSacola);
app.use('/produtos', routesProdutos);
app.use('/produto', routesProduto);
app.use('/pedido', routesPedido);
app.use('/dadosDePagamento', dadosDePagamento);
app.use('/enderecoDeEntrega', routerenderecoDeEntrega);
app.use('/politicas', routesPoliticas);



/* ===== EJS ===== */
app.set("view engine", "ejs") 
/* ===== Dependencias e Arquivos ===== */
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

/* ===== Error ===== */

app.listen(3333, () => {console.log('Servidor rodando na porta 3333')});