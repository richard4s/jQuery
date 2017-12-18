$('#a_button').click(function() {
	$('#a_div').show('slow', 'linear', function() {
		alert('Element has been shown');
	});
});