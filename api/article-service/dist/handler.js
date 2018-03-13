'use strict';

var _mongoose = require('../../shared/dist/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _responses = require('serverless-helpers/responses');

var _Article = require('./services/Article.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postArticle = function postArticle(event, context, callback) {
  _mongoose2.default.connect(process.env.MONGODB_URI);

  var payload = (0, _responses.tryParse)(event.body);

  (0, _Article.createArticle)(payload).then(function (response) {
    return callback(null, (0, _responses.handleSuccess)(response));
  }).catch(function (err) {
    return callback(null, (0, _responses.handleError)(err));
  }).finally(function () {
    _mongoose2.default.connection.close();
  });
};

var getArticles = function getArticles(event, context, callback) {
  _mongoose2.default.connect(process.env.MONGODB_URI);

  (0, _Article.fetchArticles)().then(function (response) {
    return callback(null, (0, _responses.handleSuccess)(response));
  }).catch(function (err) {
    return callback(null, (0, _responses.handleError)(err));
  }).finally(function () {
    _mongoose2.default.connection.close();
  });
};

module.exports = {
  postArticle: postArticle,
  getArticles: getArticles
};