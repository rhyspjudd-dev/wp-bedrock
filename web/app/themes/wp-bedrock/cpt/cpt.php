<?php

function create_cpt() {
    $labels = array(
        'name' => __('CPT'),
        'singular_name' => __('cpt'),
    );
    $args = array(
        'label' => __('cpt'),
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'cpt'),
        'menu_icon' => 'dashicons-building',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    );
    register_post_type('cpt', $args);
}

add_action('init', 'create_cpt');