const PORT = process.env.PORT || 3001;
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/reactTravelApp';

require('dotenv').load();

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const compress = require('compression');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', {layout: 'layout'});
app.set('views', path.join(process.cwd(), '/server/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(layouts);
app.use((req, res, next) => {
  res.handle = (err, dbData) => {
    console.log('err: ', err, '\nDATA: ', dbData);
    res.status(err ? 400 : 200).send(err || dbData)
  };
  next();
});
app.use('/client', express.static(path.join(process.cwd(), '/client')));
app.use('/api', require('./server/api/index'));
app.get('/*', (req, res) => {
  res.render('index', {
    env: env
  });
});


var env = {
  production: process.env.NODE_ENV === 'production'
};
if (env.production) {
  Object.assign(env, {
    assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json')))
  });
}

mongoose.connect(MONGOURL, (err) => console.log(err || `MONGO @ ${MONGOURL}`));
app.listen(PORT, err => console.log(err || `Server @ ${PORT}`));

if (env.production === false) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var webpackDevConfig = require('./webpack.config.development');

  new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: '/client/',
    contentBase: './client/',
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  }).listen(3000, 'localhost', (err) => {
    if (err) {
      console.error(err);
    }
    console.log('webpack dev server listening on localhost:3000');
  });
}
