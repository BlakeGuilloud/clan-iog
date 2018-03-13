'use strict';

var _Article = require('../../../shared/dist/models/Article.model');

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createArticle(_ref) {
  var title = _ref.title,
      body = _ref.body,
      author = _ref.author,
      category = _ref.category;

  return _Article2.default.create({
    title: title,
    body: body,
    author: author,
    category: category
  });
}

function fetchArticles() {
  return _Article2.default.find({}).populate('category');
}

module.exports = {
  createArticle: createArticle,
  fetchArticles: fetchArticles
};