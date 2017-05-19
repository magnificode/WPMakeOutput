import gulp from 'gulp';
import pump from 'pump';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';

/**
 * Gulp task to run the svmin task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp svgmin task.</caption>
 * // returns void
 * gulp svgmin
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
 */
gulp.task( 'svgmin', function( cb ) {
	const fileDest = './dist/svg',
		fileSrc = './assets/svg/**/*.svg',
		taskOpts = {
			plugins: [
				{removeViewBox: false},
				{removeRasterImages: false},
				{removeTitle: false},
				{sortAttrs: false}
			]
		};

	pump( [
		gulp.src( fileSrc ),
		svgmin( taskOpts ),
		gulp.dest( fileDest )
	], cb );
} );
