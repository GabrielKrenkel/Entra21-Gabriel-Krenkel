require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'POSTGRESS',
    password: '123456',
    database: 'node'
});

module.exports = pool;


(async () => {

    try {
        console.log(pool);
    } catch (error) {
        console.log(error.message);
    } finally{
        pool.end()
    }

})();