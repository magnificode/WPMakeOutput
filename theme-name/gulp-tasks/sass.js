import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import gulp from 'gulp';
import pump from 'pump';

/**
 * Gulp task to run the sass task.
 *
 * @method
 * @author Dominic Magnifico, 10up
 * @example gulp sass
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
*/

gulp.task( 'sass', function( cb ) {
	const fileSrc = [
			'./assets/scss/admin/admin-style.scss',
			'./assets/scss/frontend/editor-style.scss',
			'./assets/scss/frontend/style.scss',
			'./assets/scss/shared/shared-style.scss'
		];
		const fileDest = './assets/css';
		const taskOpts = {
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
		sourcemaps.write( '.' ),
		gulp.dest( fileDest )
	], cb );

} );
