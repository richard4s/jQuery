$(document).ready(function() {
	$('#combine').click(function() {

		var failed = false;
		// var combine_text = '';

		$('input[type="text"]').each(function() {

			if ($(this).val() == '' ){
				failed = true;
			}

			// combine_text += $(this).val() + ' ';
		});

		if (failed == true){
			alert('Fill out all Fields.');
		}else if (failed == false) {
			alert('Thanks for filling out all fields.');
		}
		// $('#combined').text(combine_text);

	});
});