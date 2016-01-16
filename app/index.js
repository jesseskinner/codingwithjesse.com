var express = require('express');
var app = express();
var config = require('../config');

app.use(express.static(config.staticFolder));

app.listen(config.port);

console.log("Listening on port " + config.port);
