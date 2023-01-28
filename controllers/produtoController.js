const path = require('path')
const fs = require('fs')

const produtoRequest = require('../requests/produtoRequest')

/* const produtoFilePath = path.join(__dirname, '../database/produtos.json')
const produto = JSON.parse(fs.readFileSync(produtoFilePath, 'utf-8')) */

/* let feminino = []
produto.produtos.forEach((produto) => {    
  produto.modelos.forEach(function(modelo){  
        feminino.push(modelo)      
    })
}) */

const getProdutos = async () => {
    try {
        return await produtoRequest.getProdutos();
    } catch (error) {
        console.error(error);
        return [];
    }
};

const produtoController = {
    produto: async (req, res) => {
        const produtos = await getProdutos();
        res.render('produto', { produtos });
    },
    produtos: (req, res) => {
        const produtos = [{ name: 'Produto 1', price: 100 }, { name: 'Produto 2', price: 200 }];
        res.render('produtos', { produtos });
    }
};

module.exports = produtoController;
