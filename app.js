const express = require('express');

const errorHandler = require('./src/utils/errorHandler');
const v1Router = require('./src/v1/router');

const db = require('./src/config/database');

const serverPort = process.env.PORT | 8080;

const app = express();

// db.execute('SELECT * FROM todos').then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
// });;

 
app.use(express.json());
app.use(v1Router,errorHandler);

app.listen(serverPort);