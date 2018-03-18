import { mongoose } from 'clan-iog-shared';

import { tryParse, handleSuccess, handleError } from 'serverless-helpers/responses';

import { createArticle, fetchArticles, fetchCategories } from './services/Article.service';

const postArticle = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  const payload = tryParse(event.body);

  createArticle(payload)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
};

const getArticles = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  fetchArticles()
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
};

const getCategories = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  fetchCategories()
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
};

module.exports = {
  postArticle,
  getArticles,
  getCategories,
};