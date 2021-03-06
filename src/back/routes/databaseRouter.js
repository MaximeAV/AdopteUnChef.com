var express = require('express');
var usersRouter = require('../users/routes/usersRouter');
var router = express.Router();

router.use('/users', usersRouter);

module.exports = router;
