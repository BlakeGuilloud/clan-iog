'use strict';

var _models = require('../../../shared/dist/models');

function createArticle(_ref) {
  var title = _ref.title,
      body = _ref.body,
      author = _ref.author,
      category = _ref.category;

  return _models.Article.create({
    title: title,
    body: body,
    author: author,
    category: category
  });
}

function fetchArticles() {
  return _models.Article.find({}).populate('category');
}

function fetchCategories() {
  return _models.Category.find({});
}

module.exports = {
  createArticle: createArticle,
  fetchArticles: fetchArticles,
  fetchCategories: fetchCategories
};