import concat from 'gulp-concat';
import gulp from 'gulp';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

/**
 * Function to concat all files in a src directory.
 *
 * @method processDir
 * @author Allen Moore, 10up
 * @param  {string}       file the name of the concatenated file.
 * @param  {string|Array} src  the src dir/dirs to concat.
 * @return {mixed}             returns a sequence of functions.
 */
function processDir( file, src ) {
	const dest = './dist/js';

	return gulp.src( src )
		.pipe( concat( file ) )
		.pipe( sourcemaps.init( {
			loadMaps: true
		} ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( dest ) );
}

/**
 * Gulp task to run the concat task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp concat task.</caption>
 * // returns void
 * gulp concat
 * @returns {void}
 */
gulp.task( 'concat', () => {
	const adminFile = 'admin.js',
		adminSrc = './assets/js/admin/**/*.js',
		feFile = 'fe-file.js',
		feSrc = [
			'./assets/js/frontend/**/*.js', '!./assets/js/frontend/components/**/*.js'
		],
		sharedFile = 'shared.js',
		sharedSrc = './assets/js/shared/**/*.js';

	processDir( adminFile, adminSrc );
	processDir( feFile, feSrc );
	processDir( sharedFile, sharedSrc );
} );
