<?php
/**
 * Core setup, site hooks and filters.
 */
namespace Chewbacca\Core;

/**
 * Set up theme defaults and register supported WordPress features.
 *
 * @since 0.1.0
 *
 * @uses add_action()
 *
 * @return void
 */
function setup() {
	$n = function( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	add_action( 'after_setup_theme',  			$n( 'i18n' ) );
	add_action( 'after_setup_theme',  			$n( 'theme_setup' ) );
	add_action( 'wp_enqueue_scripts', 			$n( 'scripts' ) );
	add_action( 'wp_enqueue_scripts', 			$n( 'styles' ) );
}

/**
 * Makes WP Theme available for translation.
 *
 * Translations can be added to the /lang directory.
 * If you're building a theme based on WP Theme, use a find and replace
 * to change 'wptheme' to the name of your theme in all template files.
 *
 * @uses load_theme_textdomain() For translation/localization support.
 *
 * @since 0.1.0
 *
 * @return void
 */
function i18n() {
	load_theme_textdomain( 'chewbacca', CHEWBACCA_PATH . '/languages' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function theme_setup() {
	// add_theme_support( 'automatic-feed-links' );
	// add_theme_support( 'title-tag' );
	// add_theme_support( 'post-thumbnails' );
	// add_theme_support(
	// 	'html5', array(
	// 		'search-form',
	// 		'gallery'
	// 	)
	// );

	// // This theme uses wp_nav_menu() in three locations.
	// register_nav_menus(
	// 	array(
	// 		'primary'        => esc_html__( 'Primary Menu', 'chewbacca' ),
	// 	)
	// );
}

/**
 * Enqueue scripts for front-end.
 *
 * @uses wp_enqueue_script() to load front end scripts.
 *
 * @since 0.1.0
 *
 * @return void
 */
function scripts() {
	/**
	 * Flag whether to enable loading uncompressed/debugging assets. Default false.
	 *
	 * @param bool chewbacca_script_debug
	 */
	$debug = apply_filters( 'chewbacca_script_debug', false );
	$min = ( $debug || defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	wp_enqueue_script(
		'frontend',
		CHEWBACCA_TEMPLATE_URL . "/dist/js/frontend{$min}.js",
		array('vue', 'jquery'),
		false,
		true
	);

}

/**
 * Enqueue styles for front-end.
 *
 * @uses wp_enqueue_style() to load front end styles.
 *
 * @since 0.1.0
 *
 * @return void
 */
function styles() {
	/**
	 * Flag whether to enable loading uncompressed/debugging assets. Default false.
	 *
	 * @param bool chewbacca_style_debug
	 */
	$debug = apply_filters( 'chewbacca_style_debug', false );
	$min = ( $debug || defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	wp_enqueue_style(
		'chewbacca',
		CHEWBACCA_TEMPLATE_URL . "/dist/css/style{$min}.css",
		false
	);
}

