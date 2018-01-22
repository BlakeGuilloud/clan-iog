const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

const replayService = require('./Replay.service');

module.exports.handler = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  replayService.fetchReplays(tryParse(event.queryStringParameters).page)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
}