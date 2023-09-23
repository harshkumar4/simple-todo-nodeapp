const router = require('express').Router();

const controller = require('./todo.controller');

router.get('/todos',controller.getTodos);
router.post('/todo',controller.postTodo);
router.delete('/todo/:id',controller.deleteTodo);

module.exports = router;