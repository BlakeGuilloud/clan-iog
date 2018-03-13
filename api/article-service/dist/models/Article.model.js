'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require('mongoose-timestamp');

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

require('./Category.model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleSchema = new _mongoose2.default.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  },
  approved: {
    type: Boolean,
    default: false
  }
});

// Need to import the .model for refs


ArticleSchema.plugin(_mongooseTimestamp2.default);

module.exports = _mongoose2.default.model('Article', ArticleSchema);