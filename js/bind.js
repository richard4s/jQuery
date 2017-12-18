$('a').bind('mouseenter mouseleave', function() {
	$(this).toggleClass('bold');
});

// One way to do the bind
// $('a').mouseenter(function() {
// 	$(this).addClass('bold');
// }).mouseleave(function() {
// 	$(this).removeClass('bold');
// });