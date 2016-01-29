var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');
var bodyParser = require('body-parser');

app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({
  cache: false
});

app.use('/', routes);
app.use(express.static('public'));

app.listen(3000);