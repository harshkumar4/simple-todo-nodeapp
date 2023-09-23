const mysql2 = require('mysql2');


const pool = mysql2.createPool({
    host: 'localhost',
    database:'todo-app',
    user:'root',
    password:'1234@sql',
});

module.exports = pool.promise()