var express = require('express');
var router = express.Router();

var Item = require('../models/item');
var Quiz = require('../models/quiz');

module.exports = function(app) {
  Item.register(app, '/api/item');
  Quiz.register(app, '/api/quiz');

  return router;
};
