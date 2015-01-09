function clearBoard(el, delay, speed) {
	$(el + '> #confirm').delay(delay).fadeOut(speed);
	$(el + '>h3').delay(delay+500).fadeOut(speed);
	$(el + '>input').delay(delay+500).fadeOut(speed);
} 

function allFadeOnButton(button) {

	$(button).click(function(){
			//alert("Button clicked"); //Test...


		/*Wow, a lot of work has been completed today in order to create an experience for the user...who can now loggin successfully into the app and create 
		his or her account with no trouble, and errors also return...
		I apologize for the slow progress due to NBA 2K13 but now the app is my only priority...
		This will be a graphic function, 
		$('#back').click({
			<graphically changing the board and changing it to the contents prior to clicking "new user...">
		});*/

				clearBoard('#optionsBar', -1000, 10);
			
			/*$('#userPrompt').click(function(){
				$('#promptOverlay').fadeTo(850,0.0);
				$(this).delay(850).animate({marginLeft: '900px'}, 850)
				$(this).delay(100).fadeOut(850);
			});
				The "#promptOverlay" div is not longer in use, and as a result, we do not need to use this line of code...
				Let's keep things....simpler...
			*/
				function backToMenu(delay) {
					//window.setTimeout('alert("This function is working...")', delay); //Test...
					styles = {
						fontFamily: 'Lato',
						background: 'rgba(16,16,14,0.65)',
						paddingTop: '0px',
						paddingLeft: '0px',
						paddingRight: '0px',
					};

					var optionStyles = {
						display: 'block',
						opacity: '0',
					};

					$('#optionsBar').delay(delay).css(styles);

					var virtual = {
						height: '0px',
						display: 'block'
					};
					
					$('#imagine').css(virtual);

					//Create Options on Options Bar div, first by making a dividing line
					$('#imagine').delay(delay).animate({
						height: '330px'
					});

	//				$('#quick').delay(delay+300).css("opacity", "0");
					
					$('.optionsVertical').delay(1200).css(optionStyles);

					//Create Third option by making it now visible...
					$('#quick').delay(1850).fadeTo(300, 1);

					//Time to make options visible...
					$('.optionsVertical').delay(2000).fadeTo(300, 1);

				}

				backToMenu(2400);
			});
}


/*The following function has to do with the 
actual layout of the user interface for our user.
It will be composed of a lot of static buttons and
straight forward to */
	
	function layoutMagic() {

		function firstTime() {

			var prompt = '<div id="firstTime" class="userPrompter"><h3 class=""></div>';

			$('#firstTime').hide().appendTo().delay(200).fadeIn(200); //Appends the first time user prompt...

		}



	}



 


































