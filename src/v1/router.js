const router = require('express').Router();

const isAuthenticated = require('../utils/auth.middleware');

const todoRoutes = require('./todo/todo.router');
const userRoutes = require('./user/user.router');

router.use('/v1',userRoutes);
router.use('/v1',isAuthenticated,todoRoutes);

module.exports = router;