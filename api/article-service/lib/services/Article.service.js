import { Article, Category } from '../../../shared/dist/models';

function createArticle({ title, body, author, category }) {
  return Article.create({
    title,
    body,
    author,
    category,
  });
}

function fetchArticles() {
  return Article.find({}).populate('category');
}

function fetchCategories() {
  return Category.find({});
}

module.exports = {
  createArticle,
  fetchArticles,
  fetchCategories,
};
