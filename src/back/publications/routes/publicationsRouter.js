var express = require('express');
var getPublications = require('../components/getPublications');
var getUserPublications = require('../components/getUserPublications');
var addPublication = require('../components/addPublication');
var getDeletePublications = require('../components/deletePublications');
var router = express.Router();

/* GET publications. */
router.get('/', async function (req, res, next) {
  try{
    res.send(await getPublications.getPublications(req.body))
  }catch (err) {
}
});

/* GET users tags. */
router.post('/users', async function (req, res, next) {
  try{
    res.send(await getUserPublications.getUserPublications(req.body))
  }catch (err) {
}
});

/* POST add publication. */
router.post('/addPublication', async function (req, res, next) {
    try{
      res.send(await addPublication.addPublication(req.body))
    }catch (err) {
  }
});

/* POST delete publication. */
router.post('/delete', async function (req, res, next) {
  try{
    res.send(await getDeletePublications.getDeletePublications(req.body))
  }catch (err) {
}
});

module.exports = router;
