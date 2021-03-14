var express = require('express');
var getPublications = require('../components/getPublications');
var addPublication = require('../components/addPublication');
var router = express.Router();

/* GET publications. */
router.get('/', async function (req, res, next) {
  try{
    res.send(await getPublications.getPublications(req.body))
  }catch (err) {
  next(err);
}

/* POST add publication. */
router.post('/addPublication', async function (req, res, next) {
    try{
      res.send(await addPublication.addPublication(req.body))
    }catch (err) {
    next(err);
  }
  });

});

module.exports = router;
