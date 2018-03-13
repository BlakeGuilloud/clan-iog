const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;
const { MONGODB_URI } = require('../config');

const Category = require('../dist/models/Category.model');
const data = require('./seedData');

Category.remove({})
  .then(() => Category.collection.insert(data))
  .finally(() => mongoose.connection.close());