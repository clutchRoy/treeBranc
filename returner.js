/*$(document).ready(function(){
	//Much of the following code will look like a repeat of the new user button clicked code...
	//If this is so, it is because it has been copy pasted from that script.
	$('#returner').one("click", function(){
		//Once the returner option is clicked, remove the other options and clear the canvas so that it can be used for something else...
		$('#optionsBar>div').fadeOut(850);
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");
		alert("I am a returner.");
		//Creation of HTML elements, like input boxes and buttons
		var welcomeHeader = '<h3 margin-top="20px" class="heading">Welcome to ShowCase. Please Log In Below...</h3>';
		var inputTypeOne = '<h3 class="logTxt">Enter your Username <input class="accountCreate" id="username" name="username" type="text/plain"></input></h3>';
		var inputTypeTwo = '<h3 class="logTxt">Enter Password<input class="accountCreate" name="password" id="password" name="password" class="input_text" type="password"/></h3>';
		var submitButton = '<input type="submit" value="Sign Up" id="submit" name="submit">';
		//$('h3').delay(1900).html("Welcome to ShowCase. Please Log In Below...").appendTo("#optionsBar");

		$(welcomeHeader).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeOne).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeTwo).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		var styles = {
			fontFamily: 'Lato',
			color: 'rgba(16,16,14,0.65)',
			paddingTop: '10px',
			paddingLeft: '10px',
			paddingRight: '10px',
		};
		$('#optionsBar').css(styles);

	
	});
});*/
$(document).ready(function(){
	$('#returner, #imagine').click(function(){
		$('#optionsBar>div').fadeOut(850);
		//alert("What's going on?"); Test
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");

		//Now that the visual clearance has occurred, it is time to create some HTML elements, like input boxes and buttons for the login portion of this app.
		var welcomeHeader = '<h3 margin-top="20px" class="heading">Welcome to ShowCase. Please Log In Below...</h3>';
		var inputTypeOne = '<h3 class="logTxt">Enter Email <input class="accountLog" id="username" name="username" type="text/plain"></input></h3>'; //Following margin error repaired...
		var inputTypeTwo = '<h3 class="logTxt logTxtLog">Enter Password      <input class="accountLog" name="password" id="password" name="password" class="input_text" type="password"/></h3>';
		var submitButton = '<input type="submit" value="Sign In" id="submit" name="submit">';

		$(welcomeHeader).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeOne).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeTwo).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		$(submitButton).hide().delay(2000).appendTo('#optionsBar').fadeIn(100);
		var styles = {
			fontFamily: 'Lato',
			color: 'rgba(16,16,14,0.65',
			paddingTop: '10px',
			paddingRight: '10px',
			paddingLeft: '10px'
		};

		$('#optionsBar').css(styles); //Apply styles to options bar after effect commences.


		//The UI for this portion of the app has been created...
		//Functionality is now to be added...

		var ref = new Firebase("https://caseshow.firebaseio.com/");


		$('#submit').click(function(){
			alert("Submit button clicked..."); //Test
			ref.authWithPassword({
				email: $(inputTypeOne).val(),
				password: $(inputTypeTwo).val()
			}, function(error, authData) {
				if(error) {
					alert("User not logged in successfully...");
					console.log("User not logged in successfully...", error);
				} else {
					alert("Account logged in successfully..." + authData);
					console.log("Log in successful", authData);
				}
			});
		});
/*		$(submitButton).click(function(){
			function authHandler(error, authData) {
				if(error) {
					alert("Log in failed...", error);
				} else {
					alert("User has been logged in successfully.", authData);
				}
			}
		});*/

		


		

	});
});