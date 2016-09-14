var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

var config = {
  devtool: 'eval',
  entry: [
    __dirname + '/index.jsx'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        'presets': ['react', 'es2015', 'stage-0'],
        'env': {
          'development': {
            'plugins': [['react-transform', {
              'transforms': [{
                'transform': 'react-transform-hmr',
                'imports': ['react'],
                'locals': ['module']
              }]
            }]]
          }
        }
      }
    }, {
      test: /\.less$/,
      loader: 'style!css!postcss!less'
    }]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.less']
  },
  postcss: function () {
    return [autoprefixer]
  },
  devServer: {
    port: process.env.PORT || 3000,
    contentBase: 'example/'
  }
}

module.exports = config
