let express = require('express')
let router = express.Router();
const usuarioController = require('../controllers/usuarioController')
//const { check, validationResult } = require('express-validator');


/* const validacoes = [
    check('email')
    .isEmpty().withMessage('Email não pode ser vazio').bail()
    .isEmail().withMessage('Deve informar um email válido!').bail(),
    check('password')
    .isEmpty().withMessage('Senha não pode ser vazia').bail()
    .isStrongPassword().withMessage('Deve ser uma senha forte.').bail(),
    check('confpassword')
    .isEmpty().withMessage('Confirmação de senha não pode estar vazia').bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('A senha deve ser igual.')
        }
        return true;}),] */

        //######  VALIDAÇÃO LOGIN ######
const { check, validationResult } = require('express-validator');


router.post('/login', [
  check('login').isEmail().withMessage('O login deve ser um endereço de email válido'),
  check('password').isLength({ min: 8 }).withMessage('A senha deve ter no mínimo 8 caracteres')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // Continuar com o processamento do login
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
            }}
        );

        


router.get('/', usuarioController.login)
router.get('/perfil', usuarioController.perfil)
router.get('/cadastro', usuarioController.cadastro)
//router.post('/login', validacoes, usuarioController.logar)

module.exports = router;