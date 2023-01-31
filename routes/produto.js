let express = require('express')
let router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.detalhe)
router.post('/produto', produtoController.criar);
router.put('/produto/:id', produtoController.editar);
router.delete('/produto/:id', produtoController.deletar)

module.exports = router;