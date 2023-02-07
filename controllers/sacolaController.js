const path = require('path')

const sacolaController = {
    sacola: (req, res) => {
        res.render("sacola")
       /*  let sacola = [];

        function adicionarProduto(produto) {
            sacola.push(produto);
        }

        function renderizarSacola() {
            res.render('sacola', { sacola: sacola })
        } */
   }
}
 


module.exports = sacolaController;