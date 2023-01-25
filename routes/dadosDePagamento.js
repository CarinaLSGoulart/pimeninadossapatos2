let express = require('express')
let router = express.Router();

const dadosDePagamentoController = require('../controllers/dadosDePagamentoController')

router.get('/', dadosDePagamentoController.dadosDePagamento)

module.exports = router;