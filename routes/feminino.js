let express = require('express')
let router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/feminino', produtoController.feminino)

module.exports = router;