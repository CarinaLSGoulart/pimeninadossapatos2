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
        url: `${url}/${idProduto}`
    }),
    createProduto: (produto) => axios ({
        ...defaults,
        method: 'post',
        data: {
            ...produto
        },
        url: `${url}/`
    }),
    editProduct: (product, idProduto) => axios({
        ...def,
        method: 'patch',
        data: {
            ...product
        },
        url: `${url}/${idProduto}`
    }),
    deleteProduct: (idProduto) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${idProduto}`
    })
}

module.exports = produtoRequest;