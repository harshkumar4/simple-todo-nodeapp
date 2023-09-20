const app = require('express')();

const errorHandler = require('./src/utils/errorHandler');

const v1Router = require('./src/v1/router');

// app.use(errorHandler);
app.use(v1Router,errorHandler);

app.listen(8080);