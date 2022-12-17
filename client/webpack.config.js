module.exports = {
  entry: [
    './src/AppEntry.jsx'
  ],
  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js'
  },
  /*devServer: { 
    port: 3000, 
    proxy: { "/api/**": { target: 'http://localhost:5000', secure: false }  }
  },*/
  module: {
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
          name: 'resources/[name].[ext]',
          publicPath: 'static/resources'
        }
      },
      {
        test: /\.(png|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'resources/[name].[ext]',
          publicPath: 'static'
        }
      }
    ]
  }
}