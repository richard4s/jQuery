$(document).ready(function() {
	$('.menu').find('li').first().addClass('bold').click(function() {
		$(this).nextAll().toggle();
	}).nextAll().hide(); // This last piece of code is unnecessary
});

// $(document).ready(function() {
// 	$('.names').find('li').first().append(' (First)');
// 	$('.names').find('li').first().next().append(' (After First)');
// 	$('.names').find('li').last().append(' (Last)');
// });