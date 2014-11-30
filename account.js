$(document).ready(function(){
	$('#newUser').one("click", function(){
		//alert("Make account"); Test
		$('#optionsBar>div').fadeOut(850);
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");

		//Creation of HTML elements, like input boxes and buttons
		var welcomeHeader = '<h3 margin-top="20px" class="heading">Welcome to ShowCase. Please Log In Below...</h3>';
		var inputTypeOne = '<h3 class="logTxt">Choose a Username <input class="accountCreate" id="username" name="username" type="text/plain"></input></h3>';
		var inputTypeTwo = '<h3 class="logTxt">Enter Password<input class="accountCreate" name="password" id="password" name="password" class="input_text" type="password"/></h3>';
		var inputTypeThree = '<h3 class="logTxt">Enter Email <input id="email" name="email" class="accountCreate" type="text/plain"></input></h3>';		
		var submitButton = '<input type="submit" value="Sign Up" id="submit" name="submit">';
		//$('h3').delay(1900).html("Welcome to ShowCase. Please Log In Below...").appendTo("#optionsBar");

		$(welcomeHeader).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeOne).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeTwo).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeThree).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
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
		//The code below has to do with actually creating the account for the person....using Firebase...


		//Creating a firebase reference...
		var ref = new Firebase("https://caseshow.firebaseio.com/");

		//Process begins with click
		$('#submit').click(function(){
			alert("Creating account..."); //Test 

			//Start off by referring to our Firebase. 
			var ref = new Firebase('https://caseshow.firebaseio.com/');

			//Create user account
			ref.createUser({
				email: $('#email').val(),
				password: $('#password').val()
			}, function(error) {
				if(error===null) {
					console.log("User account created successfully.");
				} else {
					console.log("Error creating user: ", error);
				}

			});

			//Logging user in
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
			});

		//Now to create a button to go and do the actual building of the presentation using our 'default template', or you can go back, and this time, 
		//instead of 'just make me a presentation', it will be 'explore more templates', in which a dialog will appear to make templates
		//this is where i end today's work*****************

		});//End of one click process


	});//End of Account Creation Process...

});	//This marks the end of this Javascript file