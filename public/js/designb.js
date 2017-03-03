$(document).ready(function(){
	initializePage();
	
});

var num;
var picarray = [];
var k = 0;

function initializePage() {

	$("#messagecontainer").animate({ scrollTop: '100000000' }, "slow");
	$("#inputMessage").keyup(function(event){
    	if(event.keyCode == 13){

        	$("#sendBtn").click();
        }
    });

$.post("/addMessage", {message:input, num:numbness} , function(data){
console.log(data);  //** TA , INSTEAD of push or put we used post **//
		} );

		}); 
}