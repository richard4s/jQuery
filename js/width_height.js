$(document).ready(function() {
	var w_height = $(window).height();
	var w_width = $(window).width();

	$('.fit').css('height', w_height).css('width', w_width);
});

// $(document).ready(function() {
// 	var div_height = $('#div').height(); /* parseInt($('#div').css('height')); */
// 	var div_width = $('#div').width(); /* parseInt($('#div').css('width')); */
// 	$('#div').text('Width: ' + div_width + ' / Height: ' + div_height);
// });