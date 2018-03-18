import axios from 'axios';

const baseUrl = 'https://0vyu6he8z5.execute-api.us-east-1.amazonaws.com/dev';

export function createArticle(payload) {
  return axios.post(`${baseUrl}/postArticle`, payload)
    .then(response => response.data)
    .catch(handleError);
}

export function fetchArticles() {
  return axios.get(`${baseUrl}/getArticles`)
    .then(response => response.data)
    .catch(handleError);
}

export function fetchCategories() {
  return axios.get(`${baseUrl}/getCategories`)
    .then(response => response.data)
    .catch(handleError);
}

function handleError(err) {
  console.error(err); // eslint-disable-line no-console
}