$('#button').click(function() {
	$.ajax({
		url: 'page1.html',
		statusCode: {
			404: function() {
				$('#content').text('Page Not Found');
			},
			000: function() {
				$('#content').text('Check your network connection');
			}
		},
		success: function(data) {
			$('#content').html(data);
		}
	});

});