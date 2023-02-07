let express = require('express')
let router = express.Router();
const usuarioController = require('../controllers/usuarioController')
//const { check, validationResult } = require('express-validator');


//######  VALIDAÇÃO LOGIN #####

/* router.post('/login', [
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
  });  */



router.get('/', usuarioController.login);
router.get('/perfil', usuarioController.detalhar);
router.get('/cadastro', usuarioController.criar);
router.post('/', usuarioController.logar);
router.post('/cadastro', usuarioController.criar);
router.put('/cadastro', usuarioController.editar);
router.delete('/cadastro', usuarioController.deletar)

module.exports = router;