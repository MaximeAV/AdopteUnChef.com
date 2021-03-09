var db = require('../../Database/database');

async function getTags(body) {
  var data = await db
    .select('id', 'tag')
    .from('tags')
    .then((data) => {
      console.log('Get tags... \n');
      console.log(data);  
      return data;
    });
  return data;
}

exports.getTags = getTags;
 

