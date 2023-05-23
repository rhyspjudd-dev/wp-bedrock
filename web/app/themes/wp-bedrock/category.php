<?php
/*
Template Name: Blog Category Archive
Template Post Type: post, page
*/
get_header(); 

$category = get_queried_object();
$category_slug = $category->slug;

$args = array(
    'category_name' => $category_slug,
    'posts_per_page' => -1 // Display all posts from the category
);
?>

<section class="posts">
    <div class="posts__grid">
        <?php
        $custom_query = new WP_Query($args);
        if ($custom_query->have_posts()) {
            while ($custom_query->have_posts()) { ?>
            
                <div class="post-card">
                    <?php $custom_query->the_post(); ?>
                    <h2 class="post-card__title"><?php the_title(); ?></h2>
                    <p class="post-card__category"><?php the_category(', '); ?></p>
                    <div class="post-card__excerpt"><?php the_excerpt(); ?></div>
                    <a class="post-card__button" href="<?php the_permalink(); ?>">Read More</a>
                </div>

        <?php }
        } else {
            echo 'No posts found in the category.';
        }
        wp_reset_postdata();
        ?>
    </div>
</section>

<?php get_footer(); ?>