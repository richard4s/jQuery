$('#button').click(function() {
	var name = $('#name').val();
	var string = $('#string').val();

	$.post('php/post_HTTP.php', { string: string, name: name }, function(data) {
		$('#feedback').html(data);
	});

});