<?php
	require 'instant_search_db.php';

	if (isset($_POST['search_term'])) {
		$search_term = mysql_real_escape_string(htmlentities($_POST['search_term']));

		if (!empty($search_term)) {

			$search = mysql_query("SELECT place, description FROM places WHERE place LIKE '%$search_term%'") or die('error conn');
			$result_count = mysql_num_rows($search);

			$suffix = ($result_count != 1) ? 's': '';
			echo '<p>Your search for <strong>', $search_term, '</strong> returned <strong>', $result_count, '</strong> result', $suffix, '</p>';

			while ($results_row = mysql_fetch_assoc($search)) {
				echo '<p><strong>', $results_row['place'], '</strong><br />', $results_row['description'], '</p>';
			} 

		}

	}
?>