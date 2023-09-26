require('dotenv').config();
const express = require('express');

const v1Router = require('./src/v1/router');
const db = require('./src/config/database');

const User = require('./src/v1/user/user.model');
const Todo = require('./src/v1/todo/todo.model');

const serverPort = process.env.PORT | 8080;

const app = express();

 
app.use(express.json());
app.use(v1Router);

// Associations
Todo.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
User.hasMany(Todo);

db.sync(
    // { force: true }
    )
.then((result) => {
    app.listen(serverPort);
}).catch((err) => {
    console.error(err);
});