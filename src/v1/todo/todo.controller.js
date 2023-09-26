const Todo = require('./todo.model');

const errorHandler = require('../../utils/errorHandler');

const getTodos = errorHandler(async(req,res,next)=>{
    const todos =  await Todo.findAll({
        where: {
        UserId: req.userId
    }
    });
        
    res.json(todos);
  
}) ;

const postTodo = errorHandler(async (req,res,next)=>{
    const content = req.body.content;
    const userId = req.userId;

    if (!content) {
        res.status(406).json({message: 'Content missing!'});
        return;
    }
    await Todo.create({content: content, UserId: userId});

    res.json({message:'Todo Created!'});
});

const deleteTodo = errorHandler( async (req,res,next)=>{
    const todoId = req.params.id;
    const userId = req.userId;

    await Todo.destroy({where: {
        id: todoId,
        UserId: userId
      }});
    
    res.json({message:'Todo Deleted!'});
});


module.exports = {getTodos,postTodo,deleteTodo}