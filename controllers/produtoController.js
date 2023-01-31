const path = require('path')
const fs = require('fs')

const produtoRequest = require('../requests/produtoRequest');
const { get } = require('http');



const getProdutos = async () => {
    try {
        return await produtoRequest.getProdutos();
    } catch (error) {
        console.error(error);
        return [];
    }
};
const getProduto = async() => {
    try{
        return await produtoRequest.getProduto();
    }catch (error) {
        console.error(error);
        return [];
    }
};

const criarProduto = async() => {
    try {
        return await produtoRequest.criarProduto();
    } catch (error) {
        console.error(error);
        return [];
    };
}
const editarProduto = async() => {
    try {
        return await produtoRequest.editarProduto();
    } catch (error) {
        console.error(error);
        return [];
    };
};

const deletarProduto = async() => {
    try {
        return await produtoRequest.deletarProduto();
    } catch (error) {
        console.error(error);
        return [];
    };
};

const produtoController = {
    detalhe: async (req, res) => {
        const produto = await getProduto();
        res.render('produto', { produto });
    },
    listar: async (req, res) => {
        const produtos = await getProdutos();
        res.render('produtos', { produtos });
    },
    criar: async (req, res) => {
        const novoProduto = await criarProduto();
        res.render('produto', { novoProduto });
    },
    editar: async (req, res) => {
        const atualizarProduto = await editarProduto();
        res.render('produto', { atualizarProduto });
    },
    deletar: async (req,res) => {
        const excluirProduto = await deletarProduto();
        res.render('produto', { excluirProduto })
    }
};

module.exports = produtoController;
