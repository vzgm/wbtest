var webpack = require("webpack");

module.exports = {
  entry : {
    app: './source/js/main.js'
  },
  output: {
    filename: './assets/bundle.js'
  },
  module: {
    loaders: [
      {
        test   : /\.css$/,
        loader : 'style-loader!css-loader'
      },
      {
        test   : /\.scss$/,
        loader : ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
	}
};