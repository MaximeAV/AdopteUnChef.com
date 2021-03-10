var db = require('../../Database/database');

async function getUserTags(body) {
  var result = {};
  let id = body.id_user;
  result['tags'] = await db('tags')
    .join('as_users_tags', 'users.id', '=', 'as_users_tags.id_user')
    .join('tags', 'tags.id', '=', 'as_users_tags.id_tags')
    .select('tags.id', 'tags.tag')
    .where('as_users_tags.id_user', id);

  return result;
}

exports.getUserTags = getUserTags;