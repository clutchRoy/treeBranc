$(document).ready(function() {
//	alert("Page loaded..."); //Test
//	alert(window.innerHeight); More tests
//	alert($('#navBar').height()); More tests

	var heightTop = $('#prompt').offset();
	$(window).one("scroll", function(){
		$('body').scrollTo("#solidLogos");
		$()
//		if() {}
	});

	$('body').dragScroll();
});