var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// webpackMiddleware
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(req, res) {
    res.sendFile(path.join('index.html'));
});

var server = require('http').Server(app);
server.listen(1111);
console.log("Running at Port 1111");
