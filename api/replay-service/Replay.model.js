const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ReplaySchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: true,
  },
  bucketKey: {
    type: String,
    required: true,
  },
  downloads: {
    type: Number,
  },
});

ReplaySchema.plugin(timestamps);

module.exports = mongoose.model('Replay', ReplaySchema);