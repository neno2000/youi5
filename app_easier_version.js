var express = require('express');
var app = express();

app.use(express.static('webapp'));
app.use(express.static('./'));


var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
 target: "http://localhost:5000"
});
var resourceProxy = httpProxy.createProxyServer({
// map directly to the sap server where the openui5 library is mapped
 target: "http://real.target.target:port"
});

app.route('/sap/*$').all(function(req, res) {
 proxy.web(req, res);
});

app.route('/openui5/resources/*$').all(function(req, res) {
 resourceProxy.web(req, res);
});

var server = app.listen('8080', function() {

console.log("Listening on localhost:8080");

});
