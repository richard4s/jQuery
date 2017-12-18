$('#hide_message').click(function() {
	$('#message').hide();
	$('#hide_message').click(function() {
		$('#hide_message').attr('value', 'Show');
		$('#message').show();
	});	
});
