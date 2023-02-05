let express = require('express')
let router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const { check, validationResult } = require('express-validator');


//######  VALIDAÇÃO LOGIN #####

router.post('/login', [
    check('login').isEmail().withMessage('O login deve ser um endereço de email válido'),
    check('password').isLength({ min: 8 }).withMessage('A senha deve ter no mínimo 8 caracteres')
  ], 
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    // Redirecionar o usuário para a página de perfil
    res.redirect('/perfil');
  }); 

//######  VALIDAÇÃO CADASTRO ######
router.post('/cadastro', [
  check('email').isEmail().withMessage('Email inválido'),
  check('name').isLength({ min: 3, max: 16 }).withMessage('Nome deve ter entre 3 e 16 caracteres').isAlpha().withMessage('Nome deve conter somente letras'),
  check('lastname').isLength({ min: 3 }).withMessage('Sobrenome deve ter pelo menos 3 caracteres').isAlpha().withMessage('Sobrenome deve conter somente letras'),
  check('password').isLength({ min: 8 }).withMessage('Senha deve ter pelo menos 8 caracteres'),
  check('passconfirmation').custom((value, { req }) => value === req.body.password).withMessage('Confirmação de senha não confere'),
  check('agreement').equals('on').withMessage('Você deve aceitar os termos de uso e políticas de privacidade')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
}
);


router.get('/', usuarioController.login);
router.get('/perfil', usuarioController.detalhar);
router.get('/cadastro', usuarioController.criar);
router.post('/login', usuarioController.logar);
router.post('/cadastro', usuarioController.criar);
router.put('/cadastro', usuarioController.editar);
router.delete('/cadastro', usuarioController.deletar)

module.exports = router;