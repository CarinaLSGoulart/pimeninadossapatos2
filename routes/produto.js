let express = require('express')
let router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.produto)


module.exports = router;