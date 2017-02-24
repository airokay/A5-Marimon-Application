$(document).ready(function(){
	initializePage();
	
});

//var chat = require('../chat.json');

var num  = 0;
function initializePage() {
	
$("#sendBtn").click(function(event) {
		event.preventDefault();
		var input = $('#inputMessage').val();
		var listy = input.toUpperCase();
		var words = listy.split(" ");
		var list = "cool great awesome Absolutely Abundant Accept Acclaimed Accomplishment Achievement Action Active Activist Acumen Adjust Admire Adopt Adorable Adored Adventure Affirmation Affirmative Affluent Agree Airy Alive Alliance Ally Alter Amaze Amity Animated Answer Appreciation Approve Aptitude Artistic Assertive Astonish Astounding Astute Attractive Authentic Basic Beaming Beautiful Believe Benefactor Benefit Bighearted Blessed Bliss Bloom Bountiful Bounty Brave Bright Brilliant Bubbly Bunch Burgeon Calm Care Celebrate Certain Change Character Charitable Charming Cheer Cherish Clarity Classy Clean Clever Closeness Commend Companionship Complete Comradeship Confident Connect Connected Constant Content Conviction Copious Core Coupled Courageous Creative Cuddle Cultivate Cure Curious Cute Dazzling Delight Direct Discover Distinguished Divine Donate Each Day Eager Earnest Easy Ecstasy Effervescent Efficient Effortless Electrifying Elegance Embrace Encompassing Encourage Endorse Energized Energy Enjoy Enormous Enthuse Enthusiastic Entirely Essence Established Esteem Everyday Everyone Excited Exciting Exhilarating Expand Explore Express Exquisite Exultant Faith Familiar Family Famous Feat Fit Flourish Fortunate Fortune Freedom Fresh Friendship Full Funny Gather Generous Genius Genuine Give Glad Glow Gorgeous Grace Graceful Gratitude Green Grin Group Grow Handsome Happy Harmony Healed Healing Healthful Healthy Heart Hearty Heavenly Helpful Here Highest Good Hold Holy Honest Honor Hug affirm allow willing Can choose create follow know make realize action trust Idea Ideal Imaginative Increase Incredible Independent Ingenious Innate Innovate Inspire Instantaneous Instinct Intellectual Intelligence Intuitive Inventive Joined Jovial Joy Jubilation Keen Key Kind Kiss Knowledge Laugh Leader Learn Legendary Go Light Lively Love Loveliness Lucidity Lucrative Luminous Maintain Marvelous Master Meaningful Meditate Mend Metamorphosis Mind-Blowing Miracle Mission Modify Motivate Moving Natural Nature Nourish Nourished Novel Now Nurture Nutritious Open Openhanded Optimistic Paradise Party Peace Perfect Phenomenon Pleasure Plenteous Plentiful Plenty Plethora Poise Polish Popular Positive Powerful Prepared Pretty Principle Productive Project Prominent Prosperous Protect Proud Purpose Quest Quick Quiet Ready Recognize Refinement Refresh Rejoice Rejuvenate Relax Reliance Rely Remarkable Renew Renowned Replenish Resolution Resound Resources Respect Restore Revere Revolutionize Rewarding Rich Robust Rousing Safe Secure See Sensation Serenity Shift Shine Show Silence Simple Sincerity Smart Smile Smooth Solution Soul Sparkling Spirit Spirited Spiritual Splendid Spontaneous Still Stir Strong Style Success Sunny Support Sure Surprise Sustain Synchronized Team Thankful Therapeutic Thorough Thrilled Thrive Today Together Tranquil Transform Triumph Trust Truth Unity Unusual Unwavering Upbeat Value Vary Venerate Venture Very Vibrant Victory Vigorous Vision Visualize Vital Vivacious Voyage Wealthy Welcome Well Whole Wholesome Willing Wonder Wonderful Wondrous Xanadu Yes Yippee Young Youth Youthful Zeal Zest Zing Zip";
		var listofpositivewords = list.toUpperCase();
		var poswords = listofpositivewords.split(" ");
		var numb = 0;
		var pos = 0;

		



		//var words = listerine.toUpperCase();
		for (numb; numb< words.length; numb++){
			var number = 0;		
			for(number; number<poswords.length; number++){
				if (words[numb] ==  poswords[number]){
					pos++;
				} 
			}
		}


		if (pos == 0){
			num = 1;
		} else if (pos==1){
			num = 2;
		} else if (pos==2){
			num = 3;
		} else if (pos==3){
			num = 4;
		} else if (pos>=4){
			num = 5;
		}
		
		var pic = "images/" + num + ".png"
		var htmlElement = '<div class = "chatbox" > ' +
  				'<div class="answer chat"> '+
  					'<img src="images/Marimonface.png" style= "display:none"> ' +
       				'<span>' + input +' </span> ' +
       				'<img src=' + pic  + ' style="width:32px; height:32px"> ' +
       			'</div> ' +
  			'</div>'; 
		$('#messagecontainer').append(htmlElement);

		var numbness  = num.toString();

$.post("/addMessage", {message:input, num:numbness} , function(data){
console.log(data);  //** TA , INSTEAD of push or put we used post **//
		} );

		});  
}


