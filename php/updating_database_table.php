<?php
	include 'init.php';

	//echo $_SESSION['user_id'];
	if (isset($_POST['name'])) {
		$name = mysql_real_escape_string(htmlentities($_POST['name']));
		//echo $name;

		$update = mysql_query("UPDATE users SET name = '$name' WHERE user_id = ".$_SESSION['user_id']) or die('error_connect');
		if ($update) {
			echo 'Settings have been updated.';
		} else if (!$update) {
			echo 'There was an error updating your settings.';
		}

	}
?>