<?php
function create_franchises_cpt() {
    $labels = array(
        'name' => __('Franchises'),
        'singular_name' => __('Franchise'),
    );
    $args = array(
        'label' => __('Franchises'),
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'franchises'),
        'menu_icon' => 'dashicons-building',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    );
    register_post_type('franchises', $args);
}
add_action('init', 'create_franchises_cpt');