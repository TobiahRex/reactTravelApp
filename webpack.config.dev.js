import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,  // turn it on for production.
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  // can be set to work with node.
  // setting it to 'web' bundles is so that the broswer can understand the code.
  target: 'web',
  // webpack will not generate any actual physical files.
  // it stores the build files in memory.
  // but we need the physical file to emmulate.
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  // we need to tell webpack devServer where our code is.
  devServer: {
    contentBase: './src'
  },
  // Enhance webpacks power.
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // allows quick reloading of browser.
    new webpack.NoErrorsPlugin()  // allows Errors to co-exist with hot-reloading. We'll see error messages in the browser.
  ],
  module: {
    loaders: [
      // we're saying we want it to handle javascript and use babel to transpile our code.
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      // we're saying we want it to handle css.
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'
      },
      // necessary for bootstrap files found in bootstrap install files.
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],
    noParse: /\.min\.js/,
  },
};
