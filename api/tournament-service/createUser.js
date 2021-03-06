'use strict';

const axios = require('axios');
const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

module.exports.handler = (event, context, callback) => {
  const { name, tournamentId } = tryParse(event.body);

  const payload = {
    "api_key": process.env.CHALLONGE_KEY,
    name,
  };

  axios.post(`https://api.challonge.com/v1/tournaments/${tournamentId}/participants.json`, payload)
    .then(response => callback(null, handleSuccess(response.data)))
    .catch(err => {
      console.log(err);
      callback(null, handleError(err))
    })
};
