var express = require('express');
var register = require('../components/register');
var getUsers = require('../components/getUsers');
var router = express.Router();

/* GET account. */
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

module.exports = router;
