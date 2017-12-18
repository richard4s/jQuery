<?php

// Can be either POST OR GET and should be changed to
// the corresponding value in the jquery file
if (isset($_POST['input'])) {
	$string = $_POST['input'];
	echo strrev($string);
}
?>