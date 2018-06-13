var express = require('express');
var app = express();
var config = require('../config');
var adminController = require('./controller/admin');
var blogApiController = require('./controller/blog');
var bodyParser = require('body-parser');

var database = require('./model/database');
database.init(config.database);

app.use(express.static(config.staticFolder));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', blogApiController);
app.use('/admin', adminController);

app.listen(config.port);

console.log("Listening on port " + config.port);
