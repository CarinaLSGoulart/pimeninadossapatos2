const path = require('path')
const { validationResult } = require('express-validator')
const fs = require('fs')

/* const usersFilePath = path.join(__dirname, '../database/usuarios.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')) */

const usuarioController = {
    login: (req, res) => {
        res.render('login')
    },
    perfil: (req, res) => {
        const user = req.user;
        res.render('perfil', { user })
    },
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    cadastrar: (req, res) => {
        // Verifica se há erros na validação
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Se houver erros, exibe-os para o usuário
            return res.status(422).json({ errors: errors.array() });
        }
        // Se não houver erros, salva o endereço no banco de dados
        // ...
    },
    logar: (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('login', { errors: errors.errors })
        }

        let user = user.find(usr => usr.email == req.body.email)
        if (user) {
            req.session.userLogged = user.email;
            res.redirect('/perfil')
        }
    }
    

}

module.exports = usuarioController;     