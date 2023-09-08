CREATE TABLE produtos(
id_produto SERIAL PRIMARY KEY,
nome_produto VARCHAR(255) NOT NULL,
quantidade INTEGER NOT NULL,
preco NUMERIC(5,2)	
)