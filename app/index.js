var express = require('express');
var app = express();
var config = require('../config');
var adminController = require('./controller/admin');

var database = require('./model/database');
database.init(config.database);

app.use(express.static(config.staticFolder));

app.use('/admin', adminController);

app.listen(config.port);

console.log("Listening on port " + config.port);
