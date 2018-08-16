const express = require('express');
const app = express();
const config = require('../config');
const adminController = require('./controller/admin');
const blogApiController = require('./controller/blog');
const bodyParser = require('body-parser');

const database = require('./model/database');
database.init(config.database);

const staticRenderer = express.static(config.staticFolder);

app.use(staticRenderer);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', blogApiController);
app.use('/admin', adminController);

app.use('/article/:slug', staticRenderer);

app.listen(config.port);

console.log("Listening on port " + config.port);
