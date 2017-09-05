<?php
/**
 * The template for displaying the header.
 *
 * @package Project Name
 * @since 0.1.0
 */
 ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
	<?php
	/**
	 * Custom action to provide entry point
	 * for items such as GPT tags.
	 */
	do_action( 'after_body' ); ?>
