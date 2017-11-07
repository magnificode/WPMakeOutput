<?php

namespace ProjectName;

class Theme {

	/**
	 * Constructor.
	 */
	public function __construct() {
		global $content_width;

		if ( ! isset( $content_width ) ) {
			$content_width = 9999;
		}

		$this->i18n();

		// Register action hooks.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_scripts' ) );
		add_action( 'admin_init', array( $this, 'add_editor_styles' ) );
		add_action( 'wp_head', array( $this, 'add_header_meta' ) );

		// Register filter hooks.
		// @example add_filter();
	}

	/**
	 * Function that makes Project Name available for translation.
	 *
	 * @uses load_theme_textdomain() For translation/localization support.
	 * @since 0.1.0
	 * @return void
	 */
	public function i18n() {
		load_theme_textdomain( 'projectname', PROJECTNAME_PATH . '/languages' );
	}

	/**
	 * Function to enqueue front end styles.
	 *
	 * @uses wp_enqueue_script() to load front end styles.
	 * @since 0.1.0
	 * @return void
	 */
	public function enqueue_frontend_styles() {

		$debug = apply_filters( 'wptheme_script_debug', false );
		$min = ( $debug || defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		wp_enqueue_style(
			'project-name',
			PROJECT_TEMPLATE_URL . "dist/css/frontend/style{$min}.css",
			array(),
			PROJECTNAME_VERSION
		);
	}

	/**
	 * Function to enqueue front end scripts.
	 *
	 * @uses wp_enqueue_script() to load front end scripts.
	 * @since 0.1.0
	 * @return void
	 */
	public function enqueue_frontend_scripts() {

		$debug = apply_filters( 'wptheme_script_debug', false );
		$min = ( $debug || defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		wp_enqueue_script(
			'project-name',
			PROJECT_TEMPLATE_URL . "dist/js/frontend/project-name{$min}.js",
			array(),
			PROJECTNAME_VERSION,
			true
		);

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script(
				'comment-reply'
			);
		}
	}

	/**
	 * Function to add editor styles
	 *
	 * @uses add_action( 'admin_init', $func )
	 * @see https://codex.wordpress.org/Function_Reference/add_editor_style
	 * @since 0.1.0
	 * @return void
	 */
	public function add_editor_styles() {

		$debug = apply_filters( 'wptheme_script_debug', false );
		$min = ( $debug || defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		add_editor_style( "assets/css/dist/editor-style{$min}.css" );
	}

	/**
	 * Add humans.txt to the <head> element.
	 *
	 * @uses apply_filters()
	 * @since 0.1.0
	 * @return void
	 */
	public function add_header_meta() {
		/**
		 * Filter the path used for the site's humans.txt attribution file
		 *
		 * @param string $humanstxt
		 */
		$humanstxt = apply_filters( 'projectname_humans', PROJECTNAME_TEMPLATE_URL . '/humans.txt' );

		echo '<link type="text/plain" rel="author" href="' . esc_url( $humanstxt ) . '" />';
	}
}
