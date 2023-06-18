<?php

function theme_enqueue_styles() {
    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );


function register_menus() {
    register_nav_menus( array(
        'primary' => 'Primary Menu',
    ) );
}
add_action( 'after_setup_theme', 'register_menus' );

function custom_enable_rest_api() {
  // Enable REST API on all endpoints
  global $wp_post_types;
  foreach ($wp_post_types as $post_type => $data) {
    $wp_post_types[$post_type]->show_in_rest = true;
  }
}
add_action('init', 'custom_enable_rest_api', 15);

/*
 ==================
 Ajax Search
======================	 
*/
// add the ajax fetch js
add_action( 'wp_footer', 'ajax_fetch' );
function ajax_fetch() {
?>
<script type="text/javascript">
function mukto_search_fetch(){

    jQuery.ajax({
        url: '<?php echo admin_url('admin-ajax.php'); ?>',
        type: 'post',
        data: { action: 'data_fetch', keyword: jQuery('#keyword').val() },
        success: function(data) {
            jQuery('#datafetch').html( data );
        }
    });

}
</script>

<?php
}

add_action('wp_ajax_my_admin_ajax_action', 'my_admin_ajax_handler');

function my_admin_ajax_handler() {
    // Your AJAX handler code goes here
    
    // Example response
    $response = array(
        'message' => 'AJAX request successful',
        'data' => $_POST, // Access the posted data
    );
    
    wp_send_json_success($response); // Return a JSON response
}


function ajax_search_enqueues() {
    if ( is_search() ) {
    	wp_enqueue_script( 'ajax-search', get_stylesheet_directory_uri() . '/js/ajax-search.js', array( 'jquery' ), '1.0.0', true );
        wp_localize_script( 'ajax-search', 'myAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );

    	wp_enqueue_style( 'ajax-search', get_stylesheet_directory_uri() . '/css/ajax-search.css' );
    }
}

add_action( 'wp_enqueue_scripts', 'ajax_search_enqueues' );





