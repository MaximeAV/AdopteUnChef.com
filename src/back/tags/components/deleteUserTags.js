var db = require('../../Database/database');

async function deleteUserTags(body) {
  result = {};
  let user = body.id_user;
  let tags = body.id_tags;
  var res = await db('as_users_tags')
    .where({ id_user: user, id_tags: tags })
    .del();
  if (res != 0) {
    result['msg'] = 'Successfully deleted';
  } else {
    result['msg'] = 'Nothing to delete';
  }
  return result;
}

exports.deleteUserTags = deleteUserTags;
