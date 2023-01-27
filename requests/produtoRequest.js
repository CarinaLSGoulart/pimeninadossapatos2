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
    createProduto: (produto) => axios ({
        ...defaults,
        method: 'post',
        data: {
            ...produto
        },
        url: `${url}/`
    }),
    
}
module.exports = produtoRequest;