<?php
/*
Template Name: Blog Archive
Template Post Type: post, page
*/
get_header(); 

$args = array(
    'posts_per_page' => 9,
);
?>

<section class="posts">

    <h1><?php the_title(); ?></h1>
    <div class="posts__grid">

    <?php
    $loop = new WP_Query($args);

    if ($loop->have_posts()) {
        while ($loop->have_posts()) {
            $loop->the_post(); ?>
            <div class="post-card">
                <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('thumbnail'); ?>
                <?php endif; ?>
                <h2 class="post-card__title"><?php the_title(); ?></h2>
                <p class="post-card__category"><?php the_category(', '); ?></p>
                <div class="post-card__excerpt"><?php the_excerpt(); ?></div>
                <a class="post-card__button" href="<?php the_permalink(); ?>">Read More</a>
            </div>
    <?php }
    } else {
        echo 'No posts found.';
    }
    wp_reset_postdata();
    ?>
    </div>

</section>

<?php get_footer(); ?>