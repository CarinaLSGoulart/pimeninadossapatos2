let express = require('express')
let router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.produto)
router.get('/produtos', produtoController.produtos)

module.exports = router;