import cssnext from 'postcss-cssnext';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import pump from 'pump';
import sourcemaps from 'gulp-sourcemaps';

/**
 * Gulp task to run the postcss task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example gulp postcss
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
*/

gulp.task( 'postcss', function( cb ) {
	const fileSrc = [
			'./assets/css/admin-style.css',
			'./assets/css/editor-style.css',
			'./assets/css/shared-style.css',
			'./assets/css/style.css'
		],
		fileDest = './dist/css',
		taskOpts = [cssnext( {
				features: {
					autoprefixer: {
						browsers: ['last 2 versions']
					}
				}
			} )];

	pump( [
		gulp.src( fileSrc ),
		postcss( taskOpts ),
		sourcemaps.init( {
			loadMaps: true
		} ),
		sourcemaps.write( './' ),
		gulp.dest( fileDest )
	], cb );
} );
