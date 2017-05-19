import gulp from 'gulp';
import pump from 'pump';
import scssLint from 'gulp-scss-lint';

/**
 * Gulp task to run the scss-lint task.
 *
 * @method
 * @author Allen Moore, 10up
 * @example <caption>Example usage of the gulp scss-lint task.</caption>
 * // returns void
 * gulp scss-lint
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
 */
gulp.task( 'scss-lint', ( cb ) => {
	const fileDest = './reports',
		fileSrc = ['./assets/scss/**/*.scss'],
		taskOpts = {
			config: './node_modules/scsslint-config-allenmoore/.scss-lint.yml',
			endless: true
		};

	pump( [
		gulp.src( fileSrc ),
		scssLint( taskOpts )
	], cb );
} );
