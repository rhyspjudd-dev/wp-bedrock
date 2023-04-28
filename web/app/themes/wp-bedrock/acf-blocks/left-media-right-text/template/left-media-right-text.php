<?php
/**
 * Left-media-right-text Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or it's parent block.
 */

 $id = 'left-media-right-text-' . $block['id'];

// Get field values
$image = get_field('image');
$content = get_field('content');

// Output HTML
?>
<div <?php echo $id; ?> class="left-media-right-text">
    <h1>Hello</h1>
    <div class="left-media">
        <?php if ($image) : ?>
            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
        <?php endif; ?>
    </div>
    <div class="right-text">
        <?php echo $content; ?>
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