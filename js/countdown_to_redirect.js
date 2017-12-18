function counter(time, url) {
	var interval = setInterval(function() {

		$('#counter').text(time);
		time = time - 1;

		if ( time == 0 ) {
		clearInterval(interval);
		window.location = url;
		}
	}, 1000);
}

$(document).ready(function() {
	counter(5, '100_check_username.php');
});