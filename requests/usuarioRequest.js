const axios = require('axios');
const defaults = require('./default')

const url = 'login';

const usuarioRequest =  {
    getUsuarios: () => axios({
        ...defaults,
        method: 'get',
        url: `${url}/`
    }),
    getUsuario: (id) => axios ({
        ...defaults,
        method: 'get',
        url: `${url}/${id}`
    }),
    criarUsuario: (Usuario) => axios ({
        ...defaults,
        method: 'post',
        data: {
            ...Usuario
        },
        url: `${url}/`
    }),
    editarUsuario: (Usuario, id) => axios({
        ...def,
        method: 'patch',
        data: {
            ...Usuario
        },
        url: `${url}/${id}`
    }),
    deletarUsuario: (id) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${id}`
    })
}

module.exports = usuarioRequest;