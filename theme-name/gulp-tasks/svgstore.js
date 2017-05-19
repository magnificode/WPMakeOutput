import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import pump from 'pump';
import rename from 'gulp-rename';

const path = require( 'path' );

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
gulp.task( 'svgstore', function( cb ) {
	const fileDest = './dist/svg',
		fileName = 'symbol-defs.svg',
		fileSrc = [
			'./dist/svg/**/*.svg',
			'!./dist/svg/symbol-defs.svg'
		];

	pump( [
		gulp.src( fileSrc ),
		svgstore(),
		rename( fileName ),
		gulp.dest( fileDest )
	], cb );
} );
