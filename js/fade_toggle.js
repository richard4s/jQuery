$('#inout').click(function() {
	$('#image').fadeToggle(5000, 'linear', function() {
		alert('Automation complete');
	});
});