$(document).ready(function(){
	$(':button').change(function(){
		$(this).next().removeAttr('disabled');
		}).next().attr('disabled', 'disabled');
	});