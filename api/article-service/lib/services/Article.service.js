import Article from '../../../shared/dist/models/Article.model';

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

module.exports = {
  createArticle,
  fetchArticles,
};
