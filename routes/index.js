
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  res.render('index');
};

var chat = require('../chat.json');
exports.view = function(req, res){
  res.render('newEntry', chat);
};
