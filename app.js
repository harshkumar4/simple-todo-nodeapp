require('dotenv').config();
const express = require('express');

const v1Router = require('./src/v1/router');
const db = require('./src/config/database');

const serverPort = process.env.PORT | 8080;

const app = express();

 
app.use(express.json());
app.use(v1Router);

db.sync(
    // { force: true }
    )
.then((result) => {
    app.listen(serverPort);
}).catch((err) => {
    console.error(err);
});