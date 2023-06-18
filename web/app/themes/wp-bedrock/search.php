<?php 
/**
 * Template Name: Search Page
 */
?>
<?php get_header(); ?>

<section>

<h1>Results</h1>
    <?php
    if ( have_posts() ) : ?>
        <h1><?php printf( __( 'Search Results for: %s', 'your-theme-text-domain' ), '<span>' . get_search_query() . '</span>' ); ?></h1>

        <?php while ( have_posts() ) : the_post(); ?>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <?php the_content(); ?>
        <?php endwhile; ?>

        <?php the_posts_navigation(); ?>

    <?php else : ?>
        <h1><?php _e( 'No Results Found', 'your-theme-text-domain' ); ?></h1>
        <p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'your-theme-text-domain' ); ?></p>
        <?php get_search_form(); ?>
    <?php endif; ?>


</section>

<?php get_footer(); ?>