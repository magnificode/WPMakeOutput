import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sassGlob from 'gulp-sass-glob';
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

gulp.task( 'cssnext', function( cb ) {
	const fileSrc = [
			'./assets/css/admin/admin-style.css',
			'./assets/css/frontend/editor-style.css',
			'./assets/css/frontend/style.css',
			'./assets/css/shared/shared-style.css'
		];
		const fileDest = './assets/css/src';
		const cssNextOpts = {
			features: {
				autoprefixer: {
					browsers: ['last 2 versions']
				}
			}
		}
		const taskOpts = [
			require( 'postcss-import' ),
			require( 'postcss-cssnext' )( cssNextOpts )
		];

	pump( [
		gulp.src( fileSrc ),
		sassGlob(),
		postcss( taskOpts ),
		gulp.dest( fileDest )
	], cb );

} );
