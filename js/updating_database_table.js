$('#save_button').click(function() {
	// Grab values
	var name = $('#name').val();

	// Show loading text
	$('#save_status').text('Loading...');

	// Perform http request
	$.post('php/updating_database_table.php', { name: name }, function(data) {
		$('#save_status').text(data);
	});
});