const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da crudprodutos:
const index = require('./routes/index');
const produtoRoute = require('./routes/produtosroutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.crudprodutos+json' }));
app.use(cors());

app.use(index);
app.use('/crudprodutos/',produtoRoute);

module.exports = app;
export{}