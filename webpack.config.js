const path = require('path')
module.exports = {
  entry: [
    './src/AppEntry.jsx'
  ]
  ,output: {
    path: __dirname + '/static'
    ,filename: 'bundle.js'
  }
  ,module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(mp3|m4a)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'static'
        }
      },
      {
        test: /\.(png|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'static'
        }
      }
    ]
  }
}