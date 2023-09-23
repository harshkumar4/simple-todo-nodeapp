const mysql2 = require('mysql2');

const env = process.env;


const pool = mysql2.createPool({
    host: env.HOST,
    database: env.DATABASE,
    user: env.USER,
    password: env.PASSWORD,
});

module.exports = pool.promise()