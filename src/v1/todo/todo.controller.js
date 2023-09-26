const Todo = require('./todo.model');

const errorHandler = require('../../utils/errorHandler');

const getTodos = errorHandler(async(req,res,next)=>{
    const todos =  await Todo.findAll();
        
    res.json(todos);
  
}) ;

const postTodo = errorHandler(async (req,res,next)=>{
    const content = req.body.content;
    if (!content) {
        res.status(406).json({message: 'Content missing!'});
        return;
    }
    await Todo.create({content: content});

    res.json({message:'Todo Created!'});
});

const deleteTodo = errorHandler( async (req,res,next)=>{
    const todoId = req.params.id;
    await Todo.destroy({where: {
        id: todoId
      }});
    
    res.json({message:'Todo Deleted!'});
});


module.exports = {getTodos,postTodo,deleteTodo}