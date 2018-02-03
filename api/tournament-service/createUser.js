'use strict';

const axios = require('axios');
const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

module.exports.handler = (event, context, callback) => {
  const payload = {
    "api_key": "80RDCVAtG13vfKTNKdnBQXqvBgvY7BEjghchh4eV",
    "name": "part 2222222"
  };

  axios.post('https://api.challonge.com/v1/tournaments/sa42jwk9/participants.json', payload)
    .then(response => callback(null, handleSuccess(response.data)))
    .catch(err => {
      console.log(err);
      callback(null, handleError(err))
    })
};
