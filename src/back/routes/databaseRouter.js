var express = require('express');
var usersRouter = require('../users/routes/usersRouter');
var tagsRouter = require('../tags/routes/tagsRouter');
var router = express.Router();

router.use('/users', usersRouter);
router.use('/tags', tagsRouter);

module.exports = router;
