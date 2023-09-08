
const router = require('express-promise-router')();
const produtoController = require('../controllers/produtocontroller');

// ==> Definindo as rotas do CRUD - 'produto':

// ==> Rota responsável por criar um novo 'Produto': (POST): localhost:3000/crudprodutos/produtos
router.post('/produtos', produtoController.createproduto);

// ==> Rota responsável por listar todos os 'produtos': (GET): localhost:3000/crudprodutos/produtos
router.get('/produtos', produtoController.listAllprodutos);

// ==> Rota responsável por selecionar 'produto' pelo 'Id': (GET): localhost:3000/crudprodutos/produtos/:id
router.get('/produtos/:id', produtoController.findprodutoById);

// ==> Rota responsável por atualizar 'produto' pelo 'Id': (PUT): localhost: 3000/crudprodutos/produtos/:id
router.put('/produtos/:id', produtoController.updateprodutoById);

// ==> Rota responsável por excluir 'produto' pelo 'Id': (DELETE): localhost:3000/crudprodutos/produtos/:id
router.delete('/produtos/:id', produtoController.deleteprodutoById);

module.exports = router;
export{};