import gulp from 'gulp';
import pump from 'pump';
import webpack from 'webpack-stream';
import livereload from 'gulp-livereload';

function processWebpack( src, conf, dest, cb ) {
	pump( [
		gulp.src( src ),
		webpack( require( conf ) ),
		gulp.dest( dest ),
		livereload()
	], cb );
}

/**
 * Gulp task to run the webpack task.
 *
 * @method
 * @author Dominic Magnifico, 10up
 * @example gulp webpack
 * @param   {Function} cb the pipe sequence that gulp should run.
 * @returns {void}
*/
gulp.task( 'webpack', () => {
	const srcJs = './assets/js/**/*.js';
	const conf = '../webpack.config.babel.js'
	const fileDest = './';
	processWebpack( srcJs, conf, fileDest );
} );
