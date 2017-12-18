$('window').ready(function(){
	var c = confirm('Are you sure you want to leave?');
	if (c){
		return true;
	}else{
		return false;
	}
});