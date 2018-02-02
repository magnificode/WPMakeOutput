<?php
/**
 * WP Theme constants and setup functions
 *
 * @package Chewbacca
 * @since 0.1.0
 */

// Useful global constants.
define( 'CHEWBACCA_VERSION',      '0.1.0' );
define( 'CHEWBACCA_URL',          get_stylesheet_directory_uri() );
define( 'CHEWBACCA_TEMPLATE_URL', get_template_directory_uri() );
define( 'CHEWBACCA_PATH',         get_template_directory() . '/' );
define( 'CHEWBACCA_INC',          CHEWBACCA_PATH . 'includes/' );

require_once CHEWBACCA_INC . 'functions/core.php';
require_once CHEWBACCA_INC . 'functions/template-tags.php';

// Run the setup functions.
Chewbacca\Core\setup();

// What does this do?
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}


// How to use this theme
// 1. Rename folder Chewbacca -> your project's name
// 2. Do 3 case-sensitive search/replace:
// 		A. Chewbacca
// 		B. CHEWBACCA
// 		C. chewbacca
