$('#name').focusin(function() {
	$('#name_span').html('Enter your full name');
});

$('#age').focusin(function() {
	$('#age_span').html('Enter your current age');
}); 

$('#name').focusout(function() {
	$('#name_span').html('');
});

$('#age').focusout(function() {
	$('#age_span').html('');
}); 