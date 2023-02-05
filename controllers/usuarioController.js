const path = require('path')
const { validationResult } = require('express-validator')
const fs = require('fs')
const usuarioRequest = require('../requests/usuarioRequest')

/* const usersFilePath = path.join(__dirname, '../database/usuarios.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')) */


const getUsuarios = async () => {
    try {
        return await usuarioRequest.getUsuarios();
    } catch (error) {
        console.error(error);
        return [];
    }
};
const getUsuario = async() => {
    try{
        return await usuarioRequest.getUsuario();
    }catch (error) {
        console.error(error);
        return [];
    }
};

const criarUsuario = async() => {
    try {
        return await usuarioRequest.criarUsuario();
    } catch (error) {
        console.error(error);
        return [];
    };
}
const editarUsuario = async() => {
    try {
        return await usuarioRequest.editarUsuario();
    } catch (error) {
        console.error(error);
        return [];
    };
};

const deletarUsuario = async() => {
    try {
        return await usuarioRequest.deletarUsuario();
    } catch (error) {
        console.error(error);
        return [];
    };
};

const usuarioController = {
    login: async (req, res) => {
        const loginUsuario = await getUsuario();
        res.render('login', { loginUsuario})
    },
    logar: (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('login', { errors: errors.errors })
        }
        
        let user = user.find(usr => usr.email == req.body.email)
        if (user) {
            req.session.userLogged = user.email;
            res.redirect('/home')
        }
    },
    detalhar: async (req, res) => {
        let id = req.params.id;
        const usuario = await getUsuario(id);
        res.render('perfil', { usuario });
    },
    criar: async (req, res) => {
        const novoUsuario = await criarUsuario();
        res.render('cadastro', { novoUsuario });
    },
    editar: async (req, res) => {
        const atualizarUsuario = await editarUsuario();
        res.render('perfil', { atualizarUsuario });
    },
    deletar: async (req,res) => {
        const excluirUsuario = await deletarUsuario();
        res.render('perfil', { excluirUsuario })
    }
};

/* 
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
    },
    editar: (req,res) => {

    },
    deletar: (req,res) => {

    }
} */

module.exports = usuarioController;     