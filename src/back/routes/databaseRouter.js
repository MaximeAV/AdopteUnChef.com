var express = require('express');
var usersRouter = require('../users/routes/usersRouter');
var tagsRouter = require('../tags/routes/tagsRouter');
var publicationsRouter = require('../publications/routes/publicationsRouter');
var router = express.Router();

router.use('/users', usersRouter);
router.use('/tags', tagsRouter);
router.use('/publications', publicationsRouter);

module.exports = router;
