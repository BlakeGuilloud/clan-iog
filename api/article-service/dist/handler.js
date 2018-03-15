'use strict';

var _dist = require('../../shared/dist');

var _responses = require('serverless-helpers/responses');

var _Article = require('./services/Article.service');

var postArticle = function postArticle(event, context, callback) {
  _dist.mongoose.connect(process.env.MONGODB_URI);

  var payload = (0, _responses.tryParse)(event.body);

  (0, _Article.createArticle)(payload).then(function (response) {
    return callback(null, (0, _responses.handleSuccess)(response));
  }).catch(function (err) {
    return callback(null, (0, _responses.handleError)(err));
  }).finally(function () {
    _dist.mongoose.connection.close();
  });
};

var getArticles = function getArticles(event, context, callback) {
  _dist.mongoose.connect(process.env.MONGODB_URI);

  (0, _Article.fetchArticles)().then(function (response) {
    return callback(null, (0, _responses.handleSuccess)(response));
  }).catch(function (err) {
    return callback(null, (0, _responses.handleError)(err));
  }).finally(function () {
    _dist.mongoose.connection.close();
  });
};

var getCategories = function getCategories(event, context, callback) {
  console.log('were in');
  _dist.mongoose.connect(process.env.MONGODB_URI);

  (0, _Article.fetchCategories)().then(function (response) {
    return callback(null, (0, _responses.handleSuccess)(response));
  }).catch(function (err) {
    return callback(null, (0, _responses.handleError)(err));
  }).finally(function () {
    _dist.mongoose.connection.close();
  });
};

module.exports = {
  postArticle: postArticle,
  getArticles: getArticles,
  getCategories: getCategories
};