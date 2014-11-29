$(document).ready(function(){
//The user will be prompted to continue and go down the page by clicking on an HTML element
//The result will be a smooth transition of the word ">>>Continue" and then a smooth scroll down the page
//to the next stage of the user's process in the application: making an account(probably done through Google and Facebook)
	$(document).ready(function(){
		$('#userPrompt>span:nth-child(1)').delay(350).fadeTo(450,1.0);
		$('#userPrompt>span:nth-child(2)').delay(450).fadeTo(450,1.0);
		$('#userPrompt>span:nth-child(3)').delay(550).fadeTo(450,1.0);
		$('#Continue').delay(700).fadeTo(850,1.0);
	});
	/*$('#userPrompt').click(function(){
		$('#promptOverlay').fadeTo(850,0.0);
		$(this).delay(850).animate({marginLeft: '900px'}, 850)
		$(this).delay(100).fadeOut(850);
	});
		The "#promptOverlay" div is not longer in use, and as a result, we do not need to use this line of code...
		Let's keep things....simpler...
	*/

	$('#userPrompt').click(function(){
		//Scroll Down
		var height = $("#navBar").css('height');
		$('html , body').animate({
			scrollTop: 725
		}, 1250);

		//Create Options on Options Bar div, first by making a dividing line
		$('#imagine').delay(1250).animate({
			height: '355px'
		});

		//Create Third option by making it now visible...
		$('#quick').delay(1850).fadeTo(300, 1);

		//Time to make options visible...
		$('.heading').delay(2000).fadeTo(300, 1);

		//Hover animations to be added soon: 
		//.optionsVertical buttons are hovered to yield .optionsHorizontal color schemes
		//.optionsHorizontal buttons are hovered to yield .optionsVertical color schemes
	});	
});