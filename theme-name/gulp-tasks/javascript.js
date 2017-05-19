import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import gUtil from 'gulp-util';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';

/**
 * Gulp task to run the javascript task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp javascript task.</caption>
 * // returns mixed
 * gulp javascript
 * @returns {mixed} returns a sequence of functions.
 */
gulp.task( 'javascript', () => {
	const fileSrc = './assets/js/frontend/components/**/*.js',
		fileDest = './assets/js/frontend',
		b = browserify( fileSrc, {
			debug: true
		} ).transform( babelify );

	return b.bundle()
		.pipe( source( fileSrc ) )
		.pipe( buffer() )
		.pipe( sourcemaps.init( {
			loadMaps: true
		} ) )
		.on( 'error', gUtil.log )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( fileDest ) );
} );
