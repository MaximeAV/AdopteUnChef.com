var db = require('../../Database/database');

async function getDeletePublications(body) {
  result = {};
  let title = body.title;
  var res = await db('publications').where({ title: title }).del();
  if (res != 0) {
    result['msg'] = 'Successfully deleted';
    console.log('Deleted publication ' + title);
  } else {
    result['msg'] = 'Nothing to delete';
    console.log('Nothing to delete');
  }
  return result;
}

exports.getDeletePublications = getDeletePublications;
