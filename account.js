$(document).ready(function(){
	$('#newUser').one("click", function(){
		//alert("Make account"); Test
		$('#optionsBar>div').fadeOut(850);
		$('#optionsBar').delay(1400).css("background-color", "rgb(215,215,215)");

		var welcomeHeader = '<h3 margin-top="20px" class="heading">Welcome to ShowCase. Please Log In Below...</h3>';
		var inputTypeOne = '<input type="text/plain">Choose a Username</input>'
		var inputTypeOne = '<input type="password">Choose a Username</input>'
		//$('h3').delay(1900).html("Welcome to ShowCase. Please Log In Below...").appendTo("#optionsBar");

		$(welcomeHeader).hide().delay(500).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeOne).hide().delay(500).appendTo('#optionsBar').fadeIn(100);
		$(inputTypeTwo).hide().delay(500).appendTo('#optionsBar').fadeIn(100);
		var styles = {
			fontFamily: 'Lato',
			color: 'rgba(16,16,14,0.65)',
			paddingTop: '10px',
		};

//		$(welcomeHeader).css(headerStyle);

		$('#optionsBar').css(styles);
	});//End of Account Creation Process...

});	