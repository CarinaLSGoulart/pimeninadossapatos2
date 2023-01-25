let express = require('express')
let router = express.Router();

const enderecoDeEntregaController = require('../controllers/enderecoDeEntregaController')

router.get('/', enderecoDeEntregaController.enderecodeentrega)

module.exports = router;