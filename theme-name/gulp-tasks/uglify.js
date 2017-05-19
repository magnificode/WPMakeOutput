import gulp from 'gulp';
import pump from 'pump';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

/**
 * Gulp task to run the uglify task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp uglify task.</caption>
 * // returns void
 * gulp uglify
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
 */
gulp.task( 'uglify', function( cb ) {
	const fileDest = './dist/js',
		fileSrc = ['./dist/js/**/*.js', '!./dist/js/**/*.min.js'];

	pump( [
		gulp.src( fileSrc ),
		uglify(),
		sourcemaps.init( {
			loadMaps: true
		} ),
		sourcemaps.write( './' ),
		gulp.dest( fileDest )
	], cb );
} );
