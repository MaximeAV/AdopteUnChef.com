var express = require('express');
var getTags = require('../components/getTags');
var getUserTags = require('../components/getUserTags');
var addTags = require('../components/addTags');
var addUserTags = require('../components/addUserTags');
var deleteTags = require('../components/deleteTags');
var deleteUserTags = require('../components/deleteUserTags');
var router = express.Router();

/* GET tags. */
router.get('/', async function (req, res, next) {
  try{
    res.send(await getTags.getTags(req.body))
  }catch (err) {
}
});

/* GET users tags. */
router.post('/users', async function (req, res, next) {
  try{
    res.send(await getUserTags.getUserTags(req.body))
  }catch (err) {
}
});

/* POST add tag. */
router.post('/addTag', async function (req, res, next) {
  try{
    res.send(await addTags.addTags(req.body))
  }catch (err) {
}
});

/* POST add user tags. */
router.post('/addUserTags', async function (req, res, next) {
  try{
    res.send(await addUserTags.addUserTags(req.body))
  }catch (err) {
}
});

/* POST delete tags. */
router.post('/delete', async function (req, res, next) {
  try{
    res.send(await deleteTags.deleteTags(req.body))
  }catch (err) {
}
});

/* POST delete user tags. */
router.post('/deleteUserTags', async function (req, res, next) {
  try{
    res.send(await deleteUserTags.deleteUserTags(req.body))
  }catch (err) {
}
});

module.exports = router;
