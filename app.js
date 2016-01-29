var express = require('express');

var app = express();

app.use('/:special',function(req,resp,next) {
  // console.log(req.params);
  console.log(req.method, req.url);
  next();
},function(req,resp,next){
  if (req.params.special === "special") {
    // resp.send('special');
    console.log('this is special');
  }
  next();
});

app.get('/', function(req,resp) {
  resp.send("hello");
});

app.get('/news', function(req,resp) {
  resp.send("news");
});

app.get('/special/test', function(req,resp) {
  resp.send('special/test');
});


app.listen(3000);