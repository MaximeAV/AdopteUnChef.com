var db = require('../../Database/database');

async function getPublications(body) {
  var data = await db
    .select('id', 'title', 'description', 'image', 'likes', 'dislikes', 'comments')
    .from('publications')
    .then((data) => {
      console.log('Get publications... \n');
      //console.log(data);  
      return data;
    });
  return data;
}

exports.getPublications = getPublications;
 

