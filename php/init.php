<?php
	session_start();
	$_SESSION['user_id'] = 1;

	$conn = mysql_connect('localhost', 'root', '') or die('error_connect');
	//if($conn) echo 'yes';
	mysql_select_db('jquery') or die();
?>