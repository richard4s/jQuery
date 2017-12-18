/* For you to use the display button - $('#button')*/
$('#name').keyup(function() {
	var name = $('#name').val();
	$('#area').text(name);
});