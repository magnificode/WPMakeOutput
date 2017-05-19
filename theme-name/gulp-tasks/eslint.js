import eslint from 'gulp-eslint';
import gulp from 'gulp';
import pump from 'pump';

/**
 * Gulp task to run the eslint task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp eslint task.</caption>
 * // returns void
 * gulp eslint
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
 */
gulp.task( 'eslint', ( cb ) => {
	const configFile = 'node_modules/eslint-config-allenmoore/.eslintrc',
		fileSrc = './assets/js/**/*.js';

	pump( [
		gulp.src( fileSrc ),
		eslint( {
			configFile: configFile
		} ),
		eslint.format(),
		eslint.failAfterError()
	], cb );
} );
