var db = require('../../Database/database');

async function getUserPublications(body) {
  let id = body.id_user;
  var data = await db
    .select('id', 'title', 'description', 'image', 'likes', 'dislikes', 'comments' )
    .from('publications')
    .where('id_user', id)
    .then((data) => {
      console.log('Get publications for user : ' + id + '... \n');
      console.log(data);  
      return data;
    });
  return data;
}

exports.getUserPublications = getUserPublications;