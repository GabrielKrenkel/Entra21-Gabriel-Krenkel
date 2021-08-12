require('dotenv').config();

const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

(async () => {

    try {
        await pool.query(`

            CREATE TABLE IF NOT EXISTS clientes (

                id UUID PRIMARY KEY,
                nome text NOT NULL,
                email text NOT NULL,
                telefone text NOT NULL,
                numero_documento numeric NOT NULL,
                tipo_pessoa text NOT NULL,
                pontos integer
            );
            CREATE TABLE IF NOT EXISTS enderecos (

                id UUID PRIMARY KEY,
                rua text NOT NULL,
                numero integer NOT NULL,
                cidade text NOT NULL,
                estado text NOT NULL,
                cep text NOT NULL,
                id_cliente integer,
                FOREIGN KEY (id_cliente) REFERENCES clientes(id)
            );
            CREATE TABLE IF NOT EXISTS livros(

                id_livros UUID PRIMARY KEY,
                nome_autor text NOT NULL,
                assunto text NOT NULL,
                quantidade_estoque integer NOT NULL,
                preco numeric NOT NULL,
                id_editora text NOT NULL,

            );
        `);
        console.log(pool);
    } catch (error) {
        console.log(error.message);
    } finally {
        pool.end()
    }
})();