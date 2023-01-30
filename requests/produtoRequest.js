const axios = require('axios');
const defaults = require('./default')

const url = 'produtos';

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
    createProduto: (produto) => axios ({
        ...defaults,
        method: 'post',
        data: {
            ...produto
        },
        url: `${url}/`
    }),
    editProduto: (product, id) => axios({
        ...def,
        method: 'patch',
        data: {
            ...product
        },
        url: `${url}/${id}`
    }),
    deleteProduto: (id) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${id}`
    })
}

module.exports = produtoRequest;