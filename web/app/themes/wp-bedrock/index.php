<?php get_header(); ?>

<?php
// Get the submitted postcode value
if (isset($_POST['postcode'])) {
  $postcode = $_POST['postcode'];
  
  // Truncate the first three letters
  $postcode_truncated = substr($postcode, 3);
  
  $my_sub_field_value = get_field('postcodes', $post_id);

  // Query the franchises custom post type for the postcode match
  $franchise_query = new WP_Query(array(
    'post_type' => 'franchise',
    'meta_query' => array(
      array(
        'key' => $my_sub_field_value,
        'value' => $postcode_truncated,
        'compare' => 'LIKE'
      )
    )
  ));
  
  // If a match is found, output the contact number
  if ($franchise_query->have_posts()) {
    while ($franchise_query->have_posts()) {
      $franchise_query->the_post();
      $contact_number = get_field('contact_number');
      echo '<p>Contact number: ' . $contact_number . '</p>';
    }
  } else {
    echo '<p>No franchises found for that postcode.</p>';
  }
  
  // Reset the query
  wp_reset_postdata();
}
?>
<form method="post">
  <input type="text" name="postcode">
  <input type="submit" value="Submit">
</form>


<?php get_footer(); ?>