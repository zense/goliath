<?php

if (! function_exists('render')) {
	function render($p) {
		// available sections
		$pages = array(
			'dashboard',
			'edit'
		);

		if ( in_array($p, $pages) ) {
			require_once ADMIN_PATH . "views/$p.php";
		}else {
			wp_redirect( $current_page . 'index.php?page=dashboard' );
		}
	}
}

?>
