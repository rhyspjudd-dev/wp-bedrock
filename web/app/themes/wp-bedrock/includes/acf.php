<?php 

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

function my_acf_json_load_point( $paths ) {
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
}

add_action( 'init', 'register_acf_blocks' );

function register_acf_blocks() {
    register_block_type( get_stylesheet_directory()  . '/acf-blocks/left-media-right-text' );
    register_block_type( get_stylesheet_directory()  . '/acf-blocks/some-block' );
}