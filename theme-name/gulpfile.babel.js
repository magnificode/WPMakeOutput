import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

requireDir( './gulp-tasks' );

gulp.task( 'default', () => {
	runSequence(
		'webpack'
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
// /**
//  * Gulp task to run all Sass/CSS processes in a sequenctial order.
//  *
//  * @method
//  * @author   Allen Moore, 10up
//  * @example  <caption>Example usage of the gulp css task.</caption>
//  * // returns void
//  * gulp css
//  * @requires gulp
//  * @requires runSequence
//  * @returns  {void}
//  */
// gulp.task( 'css', () => {
// 	runSequence(
// 		'scss-lint',
// 		'sass',
// 		'postcss',
// 		'cssnano'
// 	)
// } );
//
// /**
//  * Gulp task to run all JavaScript processes in a sequenctial order.
//  *
//  * @method
//  * @author   Allen Moore, 10up
//  * @example  <caption>Example usage of the gulp js task.</caption>
//  * // returns void
//  * gulp js
//  * @requires gulp
//  * @requires runSequence
//  * @returns  {void}
//  */
// gulp.task( 'js', () => {
// 	runSequence(
// 		'eslint',
// 		'javascript',
// 		'concat',
// 		'uglify'
// 	)
// } );
//
// /**
//  * Gulp task to watch for file changes and run the associated processes.
//  *
//  * @method
//  * @author   Allen Moore, 10up
//  * @example  <caption>Example usage of the gulp watch task.</caption>
//  * // returns void
//  * gulp watch
//  * @requires gulp
//  * @requires watch
//  * @returns  {void}
//  */
// gulp.task( 'watch', () => {
// 	gulp.watch( './assets/scss/**/*.scss', ['css'] );
// 	gulp.watch( './assets/js/**/*.js', ['js'] );
// 	gulp.watch( './assets/svg/**/*.svg', ['svg'] );
// } );
//
// /**
//  * Gulp task to run the default build processes in a sequenctial order.
//  *
//  * @method
//  * @author   Allen Moore, 10up
//  * @example  <caption>Example usage of the default gulp task.</caption>
//  * // returns void
//  * gulp
//  * @requires gulp
//  * @requires runSequence
//  * @returns  {void}
//  */
// gulp.task( 'default', () => {
// 	runSequence(
// 		'svg',
// 		'css',
// 		'js'
// 	);
// } );
