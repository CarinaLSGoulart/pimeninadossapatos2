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
        res.render('login', {loginUsuario})
    },
    logar: (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('login', { errors: errors.errors })
        }        
        let usuario = req.body.email;
		let senha = req.body.password;
		
		let usuarioEncontrado = usuario.find(usuario => usuario.usuario == usuario)

		if (usuarioEncontrado){			
				if (usuarioEncontrado.senha === senha){	
					req.session.usuarioLogado = usuario;
					res.redirect('/')
				}
		}else{			
			let errors = []
			errors.push('Usuario não encontrado')			
			res.render('login', {errors})
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

module.exports = usuarioController; 

    