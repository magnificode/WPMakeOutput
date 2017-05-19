import gulp from 'gulp';
import pump from 'pump';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';

/**
 * Gulp task to run the sass task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp sass task.</caption>
 * // returns void
 * gulp sass
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
 */
gulp.task( 'sass', function( cb ) {
	const fileSrc = [
			'./assets/scss/admin/admin-style.scss',
			'./assets/scss/frontend/editor-style.scss',
			'./assets/scss/frontend/style.scss',
			'./assets/scss/shared/shared-style.scss'
		],
		fileDest = './assets/css',
		taskOpts = {
			outputStyle: 'expanded',
			precision: 8
		};

	pump( [
		gulp.src( fileSrc ),
		sassGlob(),
		sass( taskOpts ),
		sourcemaps.init( {
			loadMaps: true
		} ),
		sourcemaps.write( './' ),
		gulp.dest( fileDest )
	], cb );
} );
