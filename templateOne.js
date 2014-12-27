$(document).ready(function(){
	var canvas = '<div id="canvas"></div>';
	

	var canvasStyle = {
		height: '100px',
		width: '450px',
		backgroundColor: 'red',
	};	

	$(canvas).css(canvasStyle);
	alert("The test runs...");
	$('body').append(canvas);

}); 