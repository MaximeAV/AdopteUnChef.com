var express = require('express');
var register = require('../components/register');
var signin = require('../components/signin');
var getUsers = require('../components/getUsers');
var getDeleteUser = require('../components/deleteUser');
var router = express.Router();

/* GET users. */
router.get('/', async function (req, res, next) {
  res.send(await getUsers.getUsers(req.body));
});

/* POST auth callback. */
router.post('/register', async function (req, res, next) {
  try{
    res.send(await register.getRegister(req.body))
  }catch (err) {
  next(err);
}
});

/* POST auth callback. */
router.post('/signin', async function (req, res, next) {
  try{
    res.send(await signin.getSignin(req.body))
  }catch (err) {
  next(err);
}
});

/* POST delete tags. */
router.post('/delete', async function (req, res, next) {
  try{
    res.send(await getDeleteUser.getDeleteUser(req.body))
  }catch (err) {
}
});

module.exports = router;
