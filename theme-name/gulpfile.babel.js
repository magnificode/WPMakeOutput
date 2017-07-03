import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import livereload from 'gulp-livereload';

requireDir( './gulp-tasks' );

/**
 * Gulp task to run all SVG processes in a sequenctial order.
 *
 * @method
 * @author   Dominic Magnifico, 10up
 * @requires gulp
 * @requires runSequence
 * @returns  {void}
*/
gulp.task( 'js', () => {
	runSequence(
		'webpack',
	)
} );

//
// /**
//  * Gulp task to run all SVG processes in a sequenctial order.
//  *
//  * @method
//  * @author   Allen Moore, 10up
//  * @example  <caption>Example usage of the gulp svg task.</caption>
//  * // returns void
//  * gulp svg
//  * @requires gulp
//  * @requires runSequence
//  * @returns  {void}
//  */
// gulp.task( 'svg', () => {
// 	runSequence(
// 		'svgmin',
// 		'svgstore'
// 	)
// } );
//
/**
 * Gulp task to run all Sass/CSS processes in a sequenctial order.
 *
 * @method
 * @author   Dominic Magnifico, 10up
 * @requires gulp
 * @requires runSequence
 * @returns  {void}
*/
gulp.task( 'css', () => {
	runSequence(
		// 'scss-lint',
		// ['cssnext', 'cssnano'],
		'cssnext',
		'cssnano'
	)
} );

/**
 * Gulp task to watch for file changes and run the associated processes.
 *
 * @method
 * @author   Dominic Magnifico, 10up
 * @example  gulp watch
 * @requires gulp
 * @requires watch
 * @returns  {void}
 */
gulp.task( 'watch', () => {
	livereload.listen( { basePath: 'dist' } );
	gulp.watch( ['./assets/css/**/*.css', '!./assets/css/src/**/*.css'], ['css'] );
	gulp.watch( './assets/js/**/*.js', ['js'] );
} );

/**
 * Gulp task to run the default build processes in a sequenctial order.
 *
 * @method
 * @author   Dominic Magnifico, 10up
 * @example  <caption>Example usage of the default gulp task.</caption>
 * // returns void
 * gulp
 * @requires gulp
 * @requires runSequence
 * @returns  {void}
 */
gulp.task( 'default', () => {
	runSequence(
		// 'svg',
		'css',
		'webpack'
	);
} );
