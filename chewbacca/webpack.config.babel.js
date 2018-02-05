import webpack from 'webpack';
import path from 'path';

const DIST_PATH = path.resolve('./dist');

module.exports = {
	entry: {
			admin: './assets/js/admin/admin.js',
			frontend: './assets/js/frontend/frontend.js',
			shared: './assets/js/shared/shared.js'
	},
	output: {
		path: __dirname,
		filename: './dist/js/[name].min.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				exclude: [/(node_modules)/, DIST_PATH],
				loader: 'eslint-loader',
				options: {
					configFile: './.eslintrc'
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		// Avoid publishing files when compilation failed:
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin( {
			output: { comments: false },
		} ),
	],
	stats: { colors: true },
};
