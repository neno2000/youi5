var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var client = require('node-rest-client-promise').Client(options);
  //get the url for the request
  client.getPromise('url').catch(...).then(...);
  res.send('respond with a test resource');
});

module.exports = router;
