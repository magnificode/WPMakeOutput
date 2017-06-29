import gulp from 'gulp';
import pump from 'pump';
import webpack from 'webpack-stream';

// Webpack
function processWebpack( src, conf, dest ) {
	return gulp.src( src )
	.pipe( webpack( require( conf ) ) )
	.pipe( gulp.dest( dest ) )
}

gulp.task( 'webpack', () => {
	const srcJs = './assets/js/**/*.js';
	const conf = '../webpack.config.babel.js'
	const fileDest = './dist/js';
	processWebpack( srcJs, conf, fileDest );
} );
