// $('#append').click(function() {
// 	$('.para').append('1 ');
// });

$('#button').click(function() {
	var name = $('#name').val();
	$('#sentence').append(name);
});