import webpack from 'webpack';
import path from 'path';
import glob from 'glob';

const DIST_PATH = path.resolve('./dist');

module.exports = {
	entry: {
      admin: glob.sync( './assets/js/admin/**/*.js' ),
      frontend: glob.sync( './assets/js/frontend/**/*.js' ),
      shared: glob.sync( './assets/js/shared/**/*.js' )
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
