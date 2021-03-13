var db = require('../../Database/database');
 
async function addTags(body) {

  console.log('Test add tag...');
  console.log('tag : ' + body.tag);

  let tagAdd = body.tag;

  try{
    await db('tags')
    .insert({ tag: tagAdd })
    .then((data) => {
      console.log('tag ' + body.tag + ' inserted' +'\n' + '...................');
    });
  } catch (err) {
    next(err);
  }
}

exports.addTags = addTags;
