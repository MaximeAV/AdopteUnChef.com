var db = require('../../Database/database');

async function getDelete(body) {
  result = {};
  let id = body.id;
  var res = await db('tags').where({ id: id }).del();
  if (res != 0) {
    result['msg'] = 'Successfully deleted';
    console.log('Deleted tag ' + id);
  } else {
    result['msg'] = 'Nothing to delete';
    console.log('Nothing to delete');
  }
  return result;
}

exports.getDelete = getDelete;
