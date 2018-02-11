'use strict';

const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

const userService = require('./lib/User.service');

module.exports.postUser = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  userService.postUser(tryParse(event.body))
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
};

module.exports.login = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  userService.login(tryParse(event.body))
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
};
