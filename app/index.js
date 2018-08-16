var express = require('express');
var app = express();
var config = require('../config');
var adminController = require('./controller/admin');
var blogApiController = require('./controller/blog');
var bodyParser = require('body-parser');

var database = require('./model/database');
database.init(config.database);

const staticRenderer = express.static(config.staticFolder);

app.use(staticRenderer);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', blogApiController);
app.use('/admin', adminController);

app.use('/article/:slug', staticRenderer);

app.listen(config.port);

console.log("Listening on port " + config.port);
