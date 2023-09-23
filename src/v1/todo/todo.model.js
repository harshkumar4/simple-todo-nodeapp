const Sequelize = require('sequelize');

const db = require('../../config/database');

module.exports = db.define('Todo',{
    content: Sequelize.STRING,
    // constructor({id,content}){
    //     this.id = id;
    //     this.content = content;
    // }

    // save(){
    //     return db.execute('INSERT INTO todos (content) VALUES (?)',[this.content]);
    // }

    // static getAll(){
    //     return db.execute('SELECT * FROM todos');
    // }

    // static deleteById(id){
    //     return db.execute('DELETE FROM todos WHERE id=' + id);
    // }
})