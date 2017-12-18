/*
//This method works when you have the disabled="disabled" attribute
in your input element in your html document
$(document).ready(function(){
	$('#file').change(function(){
		$('#submit').removeAttr('disabled', '');
	});
}); 
*/

$(document).ready(function(){
	$('input[type="file"]').change(function(){
		$(this).next().removeAttr('disabled');
		}).next().attr('disabled', 'disabled');
	});


/*$(document).ready(function() {
	$('#file').change(function(){
		value = $(this).attr('value');
		alert(value);
	});
});*/