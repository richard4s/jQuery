$(document).ready(function() {
	$('#countdown').countdown({ from: 10 }, function() {
		window.location = '51_fade_in.php';
	});
});