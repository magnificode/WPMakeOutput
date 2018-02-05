import path from 'path';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const DIST_PATH = path.resolve( './dist/js' );

module.exports = {
	cache: true,
	entry: {
		admin: './assets/js/admin/admin.js',
		frontend: './assets/js/frontend/frontend.js',
		shared: './assets/js/shared/shared.js'
	},
	output: {
		path: DIST_PATH,
		filename: '[name].min.js',
	},
	resolve: {
		modules: ['node_modules'],
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			enforce: 'pre',
			loader: 'eslint-loader',
			query: {
				configFile: './.eslintrc'
			}
		},
		{
			test: /\.js$/,
			use: [{
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						'es2015'
					]
				}

			}]
		}
		]
	},
	plugins: [
	    new webpack.NoEmitOnErrorsPlugin(),
	    new UglifyJSPlugin( {
			uglifyOptions: {
				output: {
					comments: false,
				}
			}
		} )
	],
	stats: { colors: true },
};
