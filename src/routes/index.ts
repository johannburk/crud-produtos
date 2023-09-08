const express = require('express');
const router = express.Router();
router.get('/crudprodutos', (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { success: string; message: string; version: string; }): void; new(): any; }; }; }) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a crudprodutos CRUD de Produtos',
    version: '1.0.0',
  });
});
module.exports = router;