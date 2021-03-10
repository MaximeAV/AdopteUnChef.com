var db = require('../../Database/database');

async function getUserTags(body) {
  var result = {};
  let id = body.id_user;
  result['Tags for user'] = await db('users')
    .join('as_users_tags', 'users.id', '=', 'as_users_tags.id_user')
    .join('tags', 'tags.id', '=', 'as_users_tags.id_tags')
    .select('tags.id', 'tags.tag')
    .where('as_users_tags.id_user', id);

    console.log('Get tags for user ' + id);
    console.log(result);
  return result;
}

exports.getUserTags = getUserTags;