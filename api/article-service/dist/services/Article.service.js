'use strict';

var _dist = require('clan-iog-shared/dist');

var Article = _dist.models.Article,
    Category = _dist.models.Category;


function createArticle(_ref) {
  var title = _ref.title,
      body = _ref.body,
      author = _ref.author,
      category = _ref.category;

  return Article.create({
    title: title,
    body: body,
    author: author,
    category: category
  });
}

function fetchArticles() {
  return Article.find({}).populate('category').sort({ 'createdAt': -1 });
}

function fetchCategories() {
  return Category.find({});
}

module.exports = {
  createArticle: createArticle,
  fetchArticles: fetchArticles,
  fetchCategories: fetchCategories
};