$(document).ready(function(){
	$('#continue_Onwards').click(function(){
		$('#optionsBar').empty();
		$('#optionsBar').animate({
			color: 'rgb(16,16,14,0.65)'
		});

		alert("Button clicked...");
		//If button is clicked, then this alert shows up as a sort of test for the others...
	});
});        