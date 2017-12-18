$(document).ready(function() {
	$('#agree').change(function() {
		var status = $(this).attr('value');
		if (status == 'on'){
			$('#continue').removeAttr('disabled')
		} else if ( status == '' ){
			$('#continue').attr('disabled', 'disabled');
		}
	});
});