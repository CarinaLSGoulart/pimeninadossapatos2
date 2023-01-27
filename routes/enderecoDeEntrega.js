let express = require('express')
let router = express.Router();
const { check, validationResult } = require('express-validator');

const enderecoDeEntregaController = require('../controllers/enderecoDeEntregaController')


const validationEndereco = [
    check('cep').isLength({ min: 8, max: 8 }).withMessage("CEP deve ter 8 caracteres"),
    check('street').notEmpty().withMessage("Rua é obrigatório"),
    check('number').notEmpty().withMessage("Número é obrigatório"),
    check('neighborhood').notEmpty().withMessage("Bairro é obrigatório"),
    check('city').notEmpty().withMessage("Cidade é obrigatório"),
    check('state').notEmpty().withMessage("Estado é obrigatório")
  ];

router.get('/', enderecoDeEntregaController.enderecoDeEntrega)
router.post('/endereco', validationEndereco, (req, res) => {
    // Verifica se há erros na validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Se houver erros, exibe-os para o usuário
        return res.status(422).json({ errors: errors.array() });
    }
    // Se não houver erros, salva o endereço no banco de dados
    // ...
});

module.exports = router;