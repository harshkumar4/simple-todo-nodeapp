const app = require('express')();

const errorHandler = require('./src/utils/errorHandler');
const v1Router = require('./src/v1/router');

const serverPort = process.env.PORT | 8080;
 
app.use(v1Router,errorHandler);

app.listen(serverPort);