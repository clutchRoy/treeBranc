$(document).ready(function(){
//The user will be prompted to continue and go down the page by clicking on an HTML element
//The result will be a smooth transition of the word ">>>Continue" and then a smooth scroll down the page
//to the next stage of the user's process in the application: making an account(probably done through Google and Facebook)
	$(document).ready(function(){
		$('#userPrompt>span:nth-child(1)').delay(350).fadeTo(450,1.0);
		$('#userPrompt>span:nth-child(2)').delay(450).fadeTo(450,1.0);
		$('#userPrompt>span:nth-child(3)').delay(550).fadeTo(450,1.0); //this div represents the  bottom option, or the 'quick presentation div'
		$('#Continue').delay(700).fadeTo(850,1.0); //Continue button
	});
	/*$('#userPrompt').click(function(){
		$('#promptOverlay').fadeTo(850,0.0);
		$(this).delay(850).animate({marginLeft: '900px'}, 850)
		$(this).delay(100).fadeOut(850);
	});
		The "#promptOverlay" div is not longer in use, and as a result, we do not need to use this line of code...
		Let's keep things....simpler...
	*/

	$('#userPrompt').one("click",function(){
		$(this).fadeTo(850,0);
		//Scroll Down
		var height = $("#navBar").css('height');
		$('html , body').animate({
			scrollTop: 725
		}, 1250);

		//Create Options on Options Bar div, first by making a dividing line
		$('#imagine').delay(1250).animate({
			height: '330px'
		});

		//Create Third option by making it now visible...
		$('#quick').delay(1850).fadeTo(300, 1);

		//Time to make options visible...
		$('.heading').delay(2000).fadeTo(300, 1);

	});

	//With options now created, we can create some functionality to those options, making the user's experience both meaningful and aesthetically pleasing.
	
	/*$('#returner, #imagine').click(function(){
		//alert("Log into account"); Test
		$('.heading').fadeTo(850, 0);
		$('#quick').fadeOut();
		$('#imagine').delay(250).animate({
			height: '0px'
		});
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");

		$('#optionsBar');

	});*/
	/*$('#newUser').one("click", function(){
		//alert("Make account"); Test
		$('#optionsBar>div').fadeOut(850);
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");

		var welcomeHeader = '<h3 margin-top="20px" class="heading">Welcome to ShowCase. Please Log In Below...</h3>';
		var inputTypeOne = '<input type="text/plain">keep'
		//$('h3').delay(1900).html("Welcome to ShowCase. Please Log In Below...").appendTo("#optionsBar");

		$(welcomeHeader).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		
		var styles = {
			fontFamily: 'Lato',
			color: 'rgba(16,16,14,0.65)',
			paddingTop: '10px',
		};

//		$(welcomeHeader).css(headerStyle);

		$('#optionsBar').css(styles);
	});//End of Account Creation Process...*


	$('#quick').click(function(){
		//alert("I just don't care."); Test
		$('.heading').fadeTo(850, 0);
		$('#quick').fadeOut();
		$('#imagine').delay(250).animate({
			height: '0px'
		});
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");	
	});*/

});