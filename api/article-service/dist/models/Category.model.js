'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = _mongoose2.default.model('Category', CategorySchema);