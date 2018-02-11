const Replay = require('./Replay.model.js');

const createReplay = (payload) =>
  Replay.create(payload);

const fetchReplays = (page = 0, limit = 20) =>
  Replay
    .find()
    .skip(page * limit)
    .limit(limit)
    .sort({ createdAt: 'desc' });

module.exports = {
  createReplay,
  fetchReplays,
};
