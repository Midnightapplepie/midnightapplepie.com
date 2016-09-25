var webpack = require("webpack");
var path = require("path");

var config = require("./webpack.config.js");
config.output.path = "/";
var compiler = webpack(config);

var webpackDev = require ("webpack-dev-server");
var clientServer = new webpackDev(compiler,{});


clientServer.listen(8080);
