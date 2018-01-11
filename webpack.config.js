const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.json', 'jsx'],
  },
  stats: {
    colors: true,
    chunks: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
};
