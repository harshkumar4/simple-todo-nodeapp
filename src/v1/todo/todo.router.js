const router = require('express').Router();

const controller = require('./todo.controller');

router.get('/todos',controller.getTodos);
router.post('/todo',controller.postTodo);

module.exports = router;