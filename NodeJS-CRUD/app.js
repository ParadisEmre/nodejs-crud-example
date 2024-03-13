var express = require('express');

var path = require('path');

var app = express();

var ejsLayout = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var db = require('./app/models/db');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'app/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ejsLayout);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

//ADDS ROUTERS
require('./app/routes/routeManager')(app);


app.listen(8080);