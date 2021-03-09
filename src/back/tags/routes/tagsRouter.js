var express = require('express');
var getTags = require('../components/getTags');
var addTags = require('../components/addTags');
var router = express.Router();

/* GET tags. */
router.get('/', async function (req, res, next) {
  res.send(await getTags.getTags(req.body));
});

/* POST auth callback. */
router.post('/addtag', async function (req, res, next) {
    try{
      res.send(await addTags.addTags(req.body))
    }catch (err) {
    next(err);
  }
  });

module.exports = router;
