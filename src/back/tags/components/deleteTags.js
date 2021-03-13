var db = require('../../Database/database');

async function getDelete(body) {
  result = {};
  let tag = body.tag;
  var res = await db('tags').where({ tag: tag }).del();
  if (res != 0) {
    result['msg'] = 'Successfully deleted';
    console.log('Deleted tag ' + tag);
  } else {
    result['msg'] = 'Nothing to delete';
    console.log('Nothing to delete');
  }
  return result;
}

exports.getDelete = getDelete;
