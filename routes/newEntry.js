
/*
 * GET New Entry page.
 */

var chat = require('../chat.json');
exports.view = function(req, res){
  res.render('newEntry', chat);
};


exports.addChat = function(req, res) {
	var message = req.query.message;
	var type = "answer";
	var style = "display:none";

	var newChat = {
		message: message,
		type: type,
		style: style
	};

	chat.messages.push(newChat);
	res.redirect('/');
//  	res.json(chat);
  //	res.render('newEntry', chat)
}

function projectClick(e){
	e.preventDefault();
} 


function sendMessage(e){
	e.preventDefault();

	var message = document.getElementbyId('#inputmessage').value;
	var type = "answer";
	var style = "display:none";

	var newChat = {
		message: message,
		type: type,
		style: style
	}

	chat.messages.push(newChat);
	res.redirect('/');
  	res.json(chat);
 	res.render('newEntry', chat);
} 