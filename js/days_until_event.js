$(document).ready(function() {
	eventTime = 		Date.parse('3 June 2017') / 1000;
	currentTime = 		Math.floor(jQuery.now() / 1000);
	
	seconds = eventTime - currentTime;

	days = Math.floor(seconds / (60 * 60 * 24));

	$('#days').text('Only ' + days + ' days until event');
});