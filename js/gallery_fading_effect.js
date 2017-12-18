$(document).ready(function() {
	$('.fadeto').css('opacity', '0.4');
	$('.fadeto').mouseover(function() {
		$(this).fadeTo(100, 1);
		$('.fadeto').not(this).fadeTo(500, 0.4);
		// $(this).fadeTo(100, 0.4, function() {
		// 	alert('Animation complete');
		// });
	});
});