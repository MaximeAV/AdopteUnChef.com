var db = require('../../Database/database');
const bcrypt = require('bcryptjs');

async function getSignin(body) {

  console.log('Test user sign in...');

  var result = {};
  let user = body.username;
  let password = body.password;
  var data = await db
    .select('id', 'username', 'password')
    .from('users')
    .where('username', user);

  if (bcrypt.compareSync(password, data[0].password)) {
    result['good'] = 'Sign in complete !';
    console.log('Password match ! Sign in complete for user ' + user)
  } else {
    result['error'] = 'The password does not match !';
    console.log('Invalid password for user ' + user)
  }

  return result;
}

exports.getSignin = getSignin;
 

