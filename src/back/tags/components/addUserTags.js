var db = require('../../Database/database');

async function addUserTags(body) {
  var result = {};
  var user = body.id_user;
  var tags = body.tags;
  await db('as_users_tags').where({ id_user: user }).del();
  tags.forEach(async (tag) => {
    var data = await db
      .select('id')
      .from('tags')
      .where('tag', tags.tag);
    await db
      .insert({ id_user: user, id_tags: data[0].id })
      .from('as_users_tags');
  });
  result['msg'] = 'done';
  return result;
}

exports.addUserTags = addUserTags;
