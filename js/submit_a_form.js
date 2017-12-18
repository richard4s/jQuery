$(document).ready(function() {
	$('#options').change(function() {
		value = $(this).getElementById();
		if ( value !== 'default' ) {
			$(this).parent().submit();
		}
	});
});