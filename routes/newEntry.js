
/*
 * GET New Entry page.
 */

var chat = require('../chat.json');
exports.view = function(req, res){
  res.render('newEntry', chat);
};