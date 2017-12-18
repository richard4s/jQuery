$('#hideshow').click(function() {
	var value = $('#hideshow').attr('value');
	$('#message').toggle('fast');
	
	if (value == 'Hide') {
		$('#hideshow').attr('value', 'Show');
	}	else if (value == 'Show') {
		$('#hideshow').attr('value', 'Hide');
	}
}); 