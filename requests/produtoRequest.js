const axios = require('axios');
const defaults = require('./default')

const url = 'produto';

const produtoRequest =  {
    getProdutos: () => axios({
        ...defaults,
        method: 'get',
        url: `${url}/`
    }),
    getProduto: (id) => axios ({
        ...defaults,
        method: 'get',
        url: `${url}/${id}`
    }),
    criarProduto: (produto) => axios ({
        ...defaults,
        method: 'post',
        data: {
            ...produto
        },
        url: `${url}/`
    }),
    editarProduto: (produto, id) => axios({
        ...def,
        method: 'patch',
        data: {
            ...produto
        },
        url: `${url}/${id}`
    }),
    deletarProduto: (id) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${id}`
    })
}

module.exports = produtoRequest;