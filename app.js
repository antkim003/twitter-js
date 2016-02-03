var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');
var socketio = require('socket.io');

app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({
  cache: false
});


app.use(express.static('public'));

var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io));

