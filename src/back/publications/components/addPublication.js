var db = require('../../Database/database');
 
async function addPublication(body) {

  console.log('Test add publication...');
  console.log('title : ' + body.title);
  console.log('description : ' + body.description);
  console.log('image : ' + body.image);
  console.log('id_user : ' + body.id_user);

  try{
    await db('publications')
    .insert({ title: body.title, description: body.description, image: body.image, id_user: body.id_user  })
    .then((data) => {
      console.log('publication inserted' +'\n' + '...................');
    });
  } catch (err) {
    next(err);
  }
}

exports.addPublication = addPublication;
