require('dotenv').config();

const { Pool, Query } = require("pg");

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

module.exports= pool;

(async () => {

    const cliente = {
        nome: 'João',
        email: 'joao@email.com',
        telefone: '(47) 8 8888-8888',
        numero_documento: '11111111',
        tipo_pessoa: 'PF',
        rua: 'Rua timoteo pereira',
        numero: '32',
        cidade: 'Balneario Piçarras',
        estado: 'SC',
        cep: '88888-888'
    }

    try {
        await pool.query(`

            CREATE TABLE IF NOT EXISTS clientes (

                id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                nome text NOT NULL,
                email text NOT NULL,
                telefone text NOT NULL,
                numero_documento numeric NOT NULL,
                tipo_pessoa text NOT NULL,
                pontos integer
            );
            CREATE TABLE IF NOT EXISTS enderecos (

                id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                rua text NOT NULL,
                numero integer NOT NULL,
                cidade text NOT NULL,
                estado text NOT NULL,
                cep text NOT NULL,
                id_cliente UUID,
                FOREIGN KEY (id_cliente) REFERENCES clientes(id)
            );
            CREATE TABLE IF NOT EXISTS editoras (

                id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                nome_gerente text NOT NULL,
                telefone text NOT NULL
            );
            CREATE TABLE IF NOT EXISTS livros(

                id_livros UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                nome_autor text NOT NULL,
                assunto text NOT NULL,
                quantidade_estoque integer NOT NULL,
                preco numeric NOT NULL,
                id_editora UUID,
                FOREIGN KEY (id_editora) REFERENCES editoras(id)
            );
            CREATE TABLE IF NOT EXISTS compras (

                id_cliente UUID,
                id_livro UUID,
                data date NOT NULL,
                valor numeric NOT NULL,
                FOREIGN KEY (id_cliente) REFERENCES clientes(id),
                FOREIGN KEY (id_livro) REFERENCES livros(id_livros)
            );
        `);

                

        insereCliente(cliente)

        async function insereCliente(cliente) {
            
            await pool.query(`
            
            INSERT INTO clientes (nome, email, telefone, numero_documento, tipo_pessoa, pontos) VALUES ($nome, $email, $telefone, $numero_documento, $tipo_pessoa)
            
            `[cliente.nome, cliente.email, cliente.telefone, cliente.numero_documento, cliente.tipo_pessoa])
        
            await pool.query(`
            
            INSERT INTO enderecos (rua, numero, cidade, estado, cep, id_cliente) VALUES ($nome, $email, $telefone, $numero_documento, $tipo_pessoa)
            
            `[cliente.nome, cliente.email, cliente.telefone, cliente.numero_documento, cliente.tipo_pessoa])
        } 
    } catch (error) {
        console.log(error.message);
    } finally {
        pool.end()
    }
})();

