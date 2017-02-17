$(document).ready(function(){
	initializePage();
});

function initializePage() {
	
$("#sendBtn").click(function(event) {
		event.preventDefault();
		var input = $('#inputMessage').val();
		var htmlElement = '<div class = "chatbox" > ' +
  				'<div class="answer chat"> '+
  					'<img src="images/Marimon face.png" style= "display:none"> ' +
       				'<span>' + input +' </span> ' +
       			'</div> ' +
  			'</div>';
		$('#messagecontainer').append(htmlElement);
	});
}



/*var chat = require('../chat.json');

exports.addChat = function(req, res) {
	var message = req.query.message;
	var type = "answer";
	var style = "display:none";

	var newChat = {
		message: message,
		type: type,
		style: style
	}

	chat.messages.push(newChat);
	res.redirect('/');
//  	res.json(chat);
  //	res.render('newEntry', chat)
}

function initializePage() {
	$('#sendBtn').click(sendMessage);
	console.log("User clicked on button");
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
 	res.render('newEntry', chat)

} */