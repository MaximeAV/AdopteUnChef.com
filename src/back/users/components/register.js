var db = require('../../Database/database');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
 
async function getRegister(body) {

  console.log('Test user insert...');
  console.log('username : ' + body.username);
  console.log('email : ' + body.email);
  console.log('password : ' + body.password +'\n' + '...................');

  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(body.password, salt);
  let user = body.username;
  let mail = body.email;

  try{
    await db('users')
    .insert({ username: user, email: mail, password: hash })
    .then((data) => {
      console.log('user ' + body.username + ' inserted');
    });
  } catch (err) {
    next(err);
  }
}

exports.getRegister = getRegister;
