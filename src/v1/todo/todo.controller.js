const Todo = require('./todo.model');

const errorHandler = require('../../utils/errorHandler');

const getTodos = errorHandler(async(req,res,next)=>{
    const todos =  await Todo.getAll();
        
    res.json(todos[0]);
  
}) ;

const postTodo = errorHandler(async (req,res,next)=>{
    const content = req.body.content;
    const todo = new Todo({content:content});
    await todo.save();

    res.json({message:'Todo Created!'});
});

const deleteTodo = errorHandler( async (req,res,next)=>{
    const todoId = req.params.id;
    await Todo.deleteById(todoId);
    
    res.json({message:'Todo Deleted!'});
});


module.exports = {getTodos,postTodo,deleteTodo}