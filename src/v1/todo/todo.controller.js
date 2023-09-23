const getTodos = (req,res,next)=>{
    console.log(req.params.id)
    res.send({todos:[]});
};

const postTodo = (req,res,next)=>{
    console.log('post todo');
    console.log(req.params.id);
}

module.exports = {getTodos,postTodo}