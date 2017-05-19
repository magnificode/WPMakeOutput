import cssnano from 'gulp-cssnano';
import gulp from 'gulp';
import pump from 'pump';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

/**
 * Gulp task to run the cssnano task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp cssnano task.</caption>
 * // returns void
 * gulp cssnano
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
 */
gulp.task( 'cssnano', function( cb ) {
	const fileDest = './dist/css',
		fileSrc = [
			'./dist/css/**/*.css',
			'!./dist/css/**/*.min.css'
		],
	 	taskOpts = [cssnano( {
			autoprefixer: false,
			calc: {
				precision: 8
			},
			convertValues: true
		} )];

	pump( [
		gulp.src( fileSrc ),
		cssnano(),
		rename( function( path ) {
			path.extname = '.min.css'
		} ),
		sourcemaps.init( {
			loadMaps: true
		} ),
		sourcemaps.write( './' ),
		gulp.dest( fileDest )
	], cb );
} );
