const db = require('../config/db');

// ==> Método responsável por criar um novo 'produto':
exports.createproduto = async (req: { body: { nome_produto: any; quantidade: any; preco: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; body: { produto: { nome_produto: any; quantidade: any; preco: any; }; }; }): void; new(): any; }; }; }) => {
  const { nome_produto, quantidade, preco } = req.body;
  const response = await db.query(
    'INSERT INTO produtos (nome_produto, quantidade, preco) VALUES ($1, $2, $3)',
    [nome_produto, quantidade, preco],
  );

  res.status(201).send({
    message: 'produto adicionado com sucesso!',
    body: {
      produto: { nome_produto, quantidade, preco },
    },
  });
};

// ==> Método responsável por listar todos os 'produtos':
exports.listAllprodutos = async (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: any): void; new(): any; }; }; }) => {
  const response = await db.query(
    'SELECT * FROM produtos ORDER BY nome_produto ASC',
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'produto' pelo 'Id':
exports.findprodutoById = async (req: { params: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: any): void; new(): any; }; }; }) => {
  const id_produto = parseInt(req.params.id);
  const response = await db.query(
    'SELECT * FROM produtos WHERE id_produto = $1',
    [id_produto],
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'produto' pelo 'Id':
exports.updateprodutoById = async (req: { params: { id: string; }; body: { nome_produto: any; quantidade: any; preco: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  const id_produto = parseInt(req.params.id);
  const { nome_produto, quantidade, preco } = req.body;

  const response = await db.query(
    'UPDATE produtos SET nome_produto = $1, quantidade = $2, preco = $3 WHERE id_produto = $4',
    [nome_produto, quantidade, preco, id_produto],
  );

  res.status(200).send({ message: 'produto atualizado com sucesso!' });
};

// ==> Método responsável por excluir um 'produto' pelo 'Id':
exports.deleteprodutoById = async (req: { params: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; id_produto: number; }): void; new(): any; }; }; }) => {
  const id_produto = parseInt(req.params.id);
  await db.query('DELETE FROM produtos WHERE id_produto = $1', [
    id_produto,
  ]);

  res.status(200).send({ message: 'produto excluido com sucesso!', id_produto });
};