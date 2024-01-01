add_action('template_redirect', 'wpsf_random_page_redirect');
function wpsf_random_page_redirect()
{
	if (is_page('random-page')) {
		$excluded_pages = array(15, 9);
		$pages = get_pages(array('exclude' => $excluded_pages));
		$random_page = array_rand($pages);
		$page_url = get_page_link($random_page);
		wp_redirect($page_url);
		exit;
	}
}
