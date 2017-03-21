module.exports = {
  entry : './source/js/main.js',
  output: {
    filename: './assets/bundle.js'
  },
  module: {
    loaders: [
      {
        test   : /\.css$/,
        exclude: /node_modules/,
        loader : 'style-loader!css-loader'
      },
      {
        test   : /\.scss$/,
        exclude: /node_modules/,
        loader : 'style!css!sass'
      }
    ]
	}
};