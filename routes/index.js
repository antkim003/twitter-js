var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

// router.user('/tweets/')

// say that a client GET requests the path /users/nimit
router.get( '/users/:name', function (req, res) {
  var name = req.params.name.replace("_", " ");
  var tweets = tweetBank.find(function(a){return a.name.toLowerCase() == name.toLowerCase()});  
  res.render( 'index', { title: name, tweets: tweets, showForm: true, currentUser: true} );
});

// say that a client GET requests the path /users/nimit
router.get( '/tweets/:id', function (req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find(function(a){return a.id.toString() == id.toString()});  
  res.render( 'index', { title: tweets[0].name, tweets: tweets } );
});

router.post('/tweets', urlencodedParser, function(req, res) {
  // console.log('post tweet req: ', req);
  var name = req.body.name;
  var text = req.body.text;

  tweetBank.add(name, text);
  res.redirect('/');
});




module.exports = router;