<?php
/**
 * Left-media-right-text Block Template.
 *
 */

// Get field values
$image = get_field('image');
$content = get_field('content');

// Output HTML
?>
<div class="left-media-right-text">
    <h1>Hello</h1>
    <div class="left-media">
        <?php if ($image) : ?>
            <img src="<?php // echo esc_url($image['url']); ?>" alt="<?php // echo esc_attr($image['alt']); ?>">
        <?php endif; ?>
    </div>
    <div class="right-text">
        <?php // echo $content; ?>
    </div>
</div>

<style>

.left-media-right-text {
    display: flex;
    flex-direction: row;
}

.left-media-right-text .left-media {
    flex: 0 0 50%;
}

.left-media-right-text .left-media img {
    max-width: 100%;
    height: auto;
}

.left-media-right-text .right-text {
    flex: 1;
    padding: 0 20px;
}

    
</style>