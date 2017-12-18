$('#click_me').click(function() {
	var message_value = $('#click_me').attr('value');
	$('#click_event').toggle(2500);

	if (message_value == 'Click Me'){
		$('#click_me').attr('value', 'Click Me Again');
		$('#click_event').html('Yes.');
	} else if (message_value == 'Click Me Again'){
		$('#click_me').attr('value', 'Click Me');
		$('#click_event').html('No.');
	}
});