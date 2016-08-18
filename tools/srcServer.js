import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";
if (!process.env.PORT || !process.env.MONGOURL) require("dotenv").load();



const PORT = process.env.PORT || 3001;
const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost/reactTravelApp";
const app = express();
const compiler = webpack(config);
// const pathToStatic = path.join(__dirname);
/* eslint-disable no-console */

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.static(__dirname));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //pass public path defined in public.config
    publicPath: config.output.publicPath
}));
app.use((req, res, next) => {
  res.handle = (err, data) => res.status(err ? 400 : 200).send(err || data);
  next();
});
app.use(require('webpack-hot-middleware')(compiler));
app.use("/api", require("./api/index"));
app.use("*", require("./api/index"));

mongoose.connect(MONGOURL, err => console.log(error || `Connected to MongoDB at ${MONGOURL}`));
app.listen(PORT, err => console.log(err || `Listening on port ${PORT}`));
