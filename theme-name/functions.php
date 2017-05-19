<?php

/**
 * WP Theme functions and definitions
 *
 * @package Project Name
 * @since 0.1.0
 */

namespace ProjectName;

use ProjectName\Theme;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

// Self invoked function to not pollute global namespace
add_action( 'after_setup_theme', function() {
	global $projectname;

	if ( ! empty( $projectname ) ) {
		return;
	}

	// define global constants
	if ( ! defined( 'PROJECTNAME_VERSION' ) ) {
		define( 'PROJECTNAME_VERSION', '0.1.0' );
	}

	if ( ! defined( 'PROJECTNAME_URL' ) ) {
		define( 'PROJECTNAME_URL', get_stylesheet_directory_uri() );
	}
	if ( ! defined( 'PROJECTNAME_TEMPLATE_URL' ) ) {
		define( 'PROJECTNAME_TEMPLATE_URL', get_template_directory_uri() );
	}
	if ( ! defined( 'PROJECTNAME_PATH' ) ) {
		define( 'PROJECTNAME_PATH', trailingslashit( get_template_directory() ) );
	}
	if ( ! defined( 'PROJECTNAME_INC' ) ) {
		define( 'PROJECTNAME_INC', PROJECTNAME_PATH . 'includes/' );
	}

	// create new instance of the theme class
	$projectname = new Theme();
});
