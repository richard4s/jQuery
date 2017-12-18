$(':button').click(function(){
	alert('Hello');
});
$(':submit').click(function(){
	$(this).attr('value', '1 - Please wait...'); 
	//$(':submit').attr('value', '2 - Please wait...');
});