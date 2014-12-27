function clearBoard(el) {
	$(el + '> #confirm').delay(1250).fadeOut();
	$(el + '>h3').delay(1500).fadeOut();
	$(el + '>input').delay(1500).fadeOut();
}