<?php
	require 'users_db.php';

	function user_joined($user_name) {
		$user_name = mysql_real_escape_string(htmlentities($user_name));
		mysql_query("INSERT INTO application VALUES ($user_name) ");
	}

	function user_left($user_name) {

	}

	function user_list() {

	}

	if (isset($_POST['user_name'], $_POST['action'])) {
		$user_name = $_POST['user_name'];
		$action = $_POST['action'];

		if ($action == 'joined') {
			user_joined($user_name);
		}
	}

?>