'use strict';

const axios = require('axios');
const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

module.exports.handler = (event, context, callback) => {
  const { tournamentId } = tryParse(event.body);

  const payload = {
    "api_key": process.env.CHALLONGE_KEY,
  };

  axios.get(`https://api.challonge.com/v1/tournaments/${tournamentId}/participants.json?api_key=${process.env.CHALLONGE_KEY}`)
    .then(response => callback(null, handleSuccess(response.data)))
    .catch(err => {
      console.log(err);
      callback(null, handleError(err))
    })
};
