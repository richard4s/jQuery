$('#button').click(function() {
	var name = $('#name').val();

	$.ajax({
		url: 'php/page.php',
		data: 'name='+name, // AJAX send data
		success: function(data) {
			$('#content').html(data);
		}
	});

});