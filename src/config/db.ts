const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text: any, params: any) => pool.query(text, params),
};

export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "admin1234",
  DB: "crudprodutoa"
};