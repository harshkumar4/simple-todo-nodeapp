const router = require('express').Router();

const todoRoutes = require('./todo/todo.router');

router.use('/v1',todoRoutes);

module.exports = router;