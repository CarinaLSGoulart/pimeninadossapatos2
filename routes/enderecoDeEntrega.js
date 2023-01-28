let express = require('express')
let router = express.Router();
const { check, validationResult } = require('express-validator');

const enderecoDeEntregaController = require('../controllers/enderecoDeEntregaController');
const usuarioController = require('../controllers/usuarioController');


const validationEndereco = [
    check('cep').isLength({ min: 8, max: 8 }).withMessage("CEP deve ter 8 caracteres"),
    check('street').notEmpty().withMessage("Rua é obrigatório"),
    check('number').notEmpty().withMessage("Número é obrigatório"),
    check('neighborhood').notEmpty().withMessage("Bairro é obrigatório"),
    check('city').notEmpty().withMessage("Cidade é obrigatório"),
    check('state').notEmpty().withMessage("Estado é obrigatório")
  ];

router.get('/', enderecoDeEntregaController.enderecoDeEntrega);
router.post('/endereco', validationEndereco, usuarioController.cadastrar)

module.exports = router;