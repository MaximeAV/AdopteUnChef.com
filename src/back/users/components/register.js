var db = require('../../Database/database');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

async function getRegister(body) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(body.password, salt);
  let user = body.username;
  console.log('Test insert...');
  try{
    await db('users')
    .insert({ username: user, password: hash })
    .then((data) => {
      console.log('1 user inserted');
    });
  } catch (err) {
    next(err);
  }
}

exports.getRegister = getRegister;
