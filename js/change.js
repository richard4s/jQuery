$('#list').change(function(){
	var list_value = $('#list').val();
	$('#list_feedback').html('You have selected: ' + list_value);
});