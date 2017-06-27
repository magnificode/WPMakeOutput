import webpack from 'webpack';
import path from 'path';

const DIST_PATH = path.resolve('./dist');

module.exports = {
	entry: {
      admin: './assets/js/frontend/scripts.js',
      frontend: './assets/js/admin/scripts.js',
      shared: './assets/js/shared/scripts.js'
  },
	output: {
		path: __dirname,
		filename: './[name].min.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
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