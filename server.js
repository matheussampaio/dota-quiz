var http = require('http');
var path = require('path');
var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');

var app = module.exports = express();

/**
 * Express Configuration
 */
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.static(path.resolve('www')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(errorHandler());

/**
 * Routes
 */

// serve index and view partials
app.all('/*', function(req, res) {
  res.sendFile(path.resolve('www/index.html'));
});

app.use(function(req, res, next) {
  res.status(404).send({ error: 'Page not found', status: 404 });
});

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
