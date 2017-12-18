$(document).ready(function() {
	var user_name = prompt('Please Enter Your Username');
	//send user_name to users_online_sample_application.php, action: Joined
	$.post('php/users_online_sample_application.php', { user_name: user_name, action: 'joined' });

	setInterval(function() {
		// get list of users, action: list
	}, 500);

	// $(window).unload(function() {
	// 	// remove user_name, action: left;
	// })

});