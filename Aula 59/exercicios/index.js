const { Pool } = require("pg");
const format = require("pg-format")
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "node"
});

(async () => {

    // try {
    //     const res = await pool.query("SELECT NOW()")
    //     console.log(res.rows[0].now);
    // } catch (error) {
    //     console.log(error.message);
    // } finally{
    //     pool.end()
    // }

    // try {
    //     await pool.query(`
    //         CREATE TABLE IF NOT EXISTS funcionarios (
    //             id SERIAL PRIMARY KEY,
    //             nome text NOT NULL,
    //             email text NOT NULL,
    //             telefone text NOT NULL
    //         );

    //         CREATE TABLE IF NOT EXISTS enderecos (
    //             id SERIAL PRIMARY KEY,
    //             rua text NOT NULL,
    //             numero integer NOT NULL,
    //             cidade text NOT NULL,
    //             estado text NOT NULL,
    //             id_funcionario integer NOT NULL REFERENCES funcionarios
    //         );
    //     `);
    //     console.log("Tabela criada com sucesso!");
    // } catch (error) {
    //     console.log(error.message);
    // } finally{
    //     pool.end()
    // }

    // try {
    //     const funcionarios = [
    //         ["joao", 'joao@email.com', '(47) 8 8888-8888'],
    //         ["maria", 'maria@email.com', '(47) 4 4444-4444']
    //     ]

    //     const query = format('INSERT INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *', funcionarios);

    //     const res = await pool.query(query);

    //     console.log(res.rows);
    // } catch (error) {
    //     console.log(error.message);
    // } finally{
    //     pool.end()
    // }

    try {
        const { rows } = await pool.query("SELECT * FROM funcionarios WHERE nome ILIKE $1", ['%p'])

        console.log(rows);
    } catch (error) {
        console.log(error.message);
    } finally{
        pool.end()
    }
})();