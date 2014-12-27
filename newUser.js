$(document).ready(function(){
	$('#newUser').one("click", function(){
		//alert("Make account"); Test
		$('#optionsBar>div').fadeOut(850);//Clearing canvas on click once the user clicks on the "New User" option.
		//It can then be utilized for something else.
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");

		//Creation of HTML elements, like input boxes and buttons
		var welcomeHeader = '<h3 margin-top="20px" class="heading">Welcome to ShowCase. Please Log In Below...</h3>';
		var inputTypeOne = '<h3 class="logTxt">Choose a Username <input class="accountCreate" id="username" name="username" type="text/plain"></input></h3>';
		var inputTypeTwo = '<h3 class="logTxt">Enter Password<input class="accountCreate" name="password" id="password" name="password" class="input_text" type="password"/></h3>';
		var inputTypeThree = '<h3 class="logTxt">Enter Email <input id="email" name="email" class="accountCreate" type="text/plain"></input></h3>';		
		var submitButton = '<input type="submit" class="buttons" value="Sign Up" id="submit" name="submit">';
		//$('h3').delay(1900).html("Welcome to ShowCase. Please Log In Below...").appendTo("#optionsBar");
		var backButton = '<input type="submit" value="Go Back" class="buttons" id="back" name="Go Back">';

		$(welcomeHeader).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
//		$(inputTypeOne).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeThree).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeTwo).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		var styles = {
			fontFamily: 'Lato',
			color: 'rgba(16,16,14,0.65)',
			paddingTop: '10px',
			paddingLeft: '10px',
			paddingRight: '10px',
		};

//		$(welcomeHeader).css(headerStyle);
 		function makeItPassword()
      	{
         document.getElementById("passcontainer")
        .innerHTML = "<input id=\"password\" name=\"password\" type=\"password\"/>";
         document.getElementById("password").focus();
      	}

		$('#optionsBar').css(styles);
		/*var inputOneTrue = ((inputTypeOne!=null)&&(inputTypeOne!=""));
		var inputTwoTrue = ((inputTypeTwo!=null)&&(inputTypeTwo!=""));
		var inputThreeTrue = ((inputTypeThree!=null)&&(inputTypeThree!=""));
		if(inputOneTrue&&inputTwoTrue&&inputThreeTrue)
		{
			$(submitButton).hide().delay(2000).appendTo('#optionsBar').fadeIn();
		}*/
		$(submitButton).hide().delay(2000).appendTo('#optionsBar').fadeIn();

		$(backButton).hide().delay(2000).appendTo('#optionsBar').fadeIn(); /*Creation of the back button has been completed...functionality is now to be
		added to it...*/

		//Process of returning to the prior user navigation...
		$('#back').click(function(){
	//		alert("Button clicked"); //Test...


	/*Wow, a lot of work has been completed today in order to create an experience for the user...who can now loggin successfully into the app and create 
	his or her account with no trouble, and errors also return...
	I apologize for the slow progress due to NBA 2K13 but now the app is my only priority...
	This will be a graphic function, 
	$('#back').click({
		<graphically changing the board and changing it to the contents prior to clicking "new user...">
	});*/

			clearBoard('#optionsBar');
			$('#userPrompt>span:nth-child(1)').delay(350).fadeTo(450,1.0);
			$('#userPrompt>span:nth-child(2)').delay(450).fadeTo(450,1.0);
			$('#userPrompt>span:nth-child(3)').delay(550).fadeTo(450,1.0); //this div represents the  bottom option, or the 'quick presentation div'
		
		/*$('#userPrompt').click(function(){
			$('#promptOverlay').fadeTo(850,0.0);
			$(this).delay(850).animate({marginLeft: '900px'}, 850)
			$(this).delay(100).fadeOut(850);
		});
			The "#promptOverlay" div is not longer in use, and as a result, we do not need to use this line of code...
			Let's keep things....simpler...
		*/
			function backToMenu(delay) {
				window.setTimeout('alert("This function is working...")', delay); //Test...
				styles = {
					fontFamily: 'Lato',
					background: 'rgba(16,16,14,0.65)',
					paddingTop: '0px',
					paddingLeft: '0px',
					paddingRight: '0px',
				};



				$('#optionsBar').delay(delay).css(styles);

				alert("Hello"); //Test...

				//Create Options on Options Bar div, first by making a dividing line
				$('#imagine').delay(1250).animate({
					height: '330px'
				});

				//Create Third option by making it now visible...
				$('#quick').delay(1850).fadeTo(300, 1);

				//Time to make options visible...
				$('.heading').delay(2000).fadeTo(300, 1);
			}

			backToMenu(3000);

		});
 
 
		//The code below has to do with actually creating the account for the person....using Firebase...*/


		//Creating a firebase reference...
		var ref = new Firebase("https://caseshow.firebaseio.com/");

		//Process begins with click
		$('#submit').click(function(){
			//alert("Creating account..."); //Test 
			
			//These objects prompt users for the account creation process...
			var next = '<input class="post_message" id=""></input>';
			var wrong = '<h3 class="postMessage" id="confirm">Oops! Something went wrong! Try again!</h3>'; //Error message
			var confirmation = '<h3 id="confirm" class="postMessage">Your account has been created successfully.</h3>'; //Establishment of post message
			var i = 0;

			$(wrong).hide().appendTo('#optionsBar');
			//Create user account
			ref.createUser({
				email: $('#email').val(),
				password: $('#password').val()
			}, function(error) {
				if(error===null) {
					$(wrong).fadeOut();					
/*					alert("Account created successfully...");
					console.log("User account created successfully.");
					$(confirmation).hide().appendTo('#optionsBar').fadeIn(); //Confirmation message created...*/

//					$(next).hide().appendTo('#optionsBar').fadeIn();

					console.log("User account created successfully");


					$(confirmation).hide().appendTo('#optionsBar').fadeIn();

					clearBoard('#optionsBar');
				} 

				if(error) {
						console.log("Error creating user: ", error);
						//$(wrong).fadeIn();
						alert("Problem creating user account...try again...");
				}

			});

			//Logging the user in...
			ref.authWithPassword({
				email: $('#email').val(),
				password: $('#password').val()
			}, function(error, authData) {

				if(error) {
					//alert("You have not been successfully logged in...", error);
					console.log("User not logged in successfully...", error);
				} else {
					//alert("User has been successfully logged in: ", authData);
					console.log("User has been successfully logged in", autData);
				}

			});

			/*Logging user in
			ref.authWithPassword({
				email: $('#email').val(),
				password: $('#password').val()
			}, function(error, authData) {
				if(error===null) {
				  //the user has been authenticated with our Firebase
				  	console.log("Username: " + authData.uid + "Provider: " + authData.provider);
				} else {
					console.log("Error creating user: ", error);
				}
			});*/

		//Now to create a button to go and do the actual building of the presentation using our 'default template', or you can go back, and this time, 
		//instead of 'just make me a presentation', it will be 'explore more templates', in which a dialog will appear to make templates
		//this is where i end today's work*****************

//		var next = '<br/><h3 id="continue_Onwards" class="postMessage">Go on and create your first presentation!</h3>'; //Creation of post message

//		$(confirmation).hide().appendTo('#optionsBar').fadeIn(); //Confirmation message created...
		
//		$(next).hide().appendTo('#optionsBar').fadeIn().delay(500).animate({
//			marginLeft : '0px'
//		}).delay(500).fadeTo(850,1.0); //Prompts user to continue onward...
		
		/*After appending element that does not appear, we apply some animation to it.
		$(next).delay(500).animate({
			marginLeft: '0px'
		}, 850);

		$(next).delay(500).fadeTo(850,1.0);
		//As it appears, it slides into its normal position.*/
/*		var opacity = document.getElementById("continue_Onwards").style.opacity;
		if(opacity == 1) {
			alert("Prompt user forward"); //Test
		}		

		$('#continue_Onwards').click(function(){
			alert("Button clicked...");


		});*/


		});//End of one click process


	});//End of Account Creation Process...

});	//This marks the end of this Javascript file