$(document).ready(function() {
	$('#agree').attr('disabled', 'disabled');

	$('#terms').scroll(function() {
		var textarea_height = $(this) [0].scrollHeight;
		var scroll_height = textarea_height - $(this).innerHeight();

		var scroll_top = $(this).scrollTop();

		if (scroll_top == 5933) { //supposed to be scroll_top == sscroll_height but there is a problem with the scroll_height calculation
			$('#agree').removeAttr('disabled');
		}
	});
});