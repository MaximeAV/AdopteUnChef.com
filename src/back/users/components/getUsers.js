var db = require('../../Database/database');

async function getUsers(body) {
  var data = await db
    .select('id', 'username', 'password')
    .from('users')
    .then((data) => {
      return data;
    });
  return data;
}

exports.getUsers = getUsers;
 

