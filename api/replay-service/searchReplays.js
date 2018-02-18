const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

const replayService = require('./Replay.service');

module.exports.handler = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  replayService.searchReplays(tryParse(event.queryStringParameters).query)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
}