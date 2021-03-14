var db = require('../../Database/database');

async function addUserTags(body) {
  var result = {};
  var user = body.id_user;
  var tagsAdd = body.tags;

  console.log('Test add tag to user...');
  console.log('tags : ' + body.tags);
  console.log('user : ' + body.id_user);

  await db('as_users_tags').where({ id_user: user }).del();
  tagsAdd.forEach(async (tagsAdd) => {
    var data = await db
      .select('id')
      .from('tags')
      .where('tag', tagsAdd);
    await db
      .insert({ id_user: user, id_tags: data[0].id })
      .from('as_users_tags');
  });
  result['msg'] = 'Tags inserted';
  console.log('tags ' + body.tags + ' inserted for user ' + body.id_user);

  return result;
}

exports.addUserTags = addUserTags;
