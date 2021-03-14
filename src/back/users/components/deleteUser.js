var db = require('../../Database/database');

async function getDeleteUser(body) {
  result = {};
  let id_connect = body.id_connect;
  let user = body.username;

  await db
    .select('id', 'username', 'email', 'role')
    .from('users')
    .where('id', id_connect)
    if('role', "Administrateur"){
        res = await db('users').where({ username: user }).del();
        if (res != 0) {
          result['msg'] = 'Successfully deleted';
          console.log('Deleted publication ' + title);
        } else {
          result['msg'] = 'Nothing to delete';
          console.log('Nothing to delete');
        }
        return result;
    }
}

exports.getDeleteUser = getDeleteUser;
