$('.hover').mousemove(function(e) {
	var hovertext = $(this).attr('hovertext');
	$('#hoverdiv').text(hovertext).show();
	$('#hoverdiv').css('top', e.clientY+10).css('left', e.clientX+10);
	/* For the co-ordinates, the parameter in your function
	should look exactly like "function(e) {"
	$('#co').text('X: ' + e.clientX + ' y: ' + e.clientY); */
}).mouseout(function(){
	$('#hoverdiv').hide();
});