const Replay = require('./Replay.model.js');

const searchReplays = (query) => {
  return Replay.find()
    .then((data) => {
      const names = data.filter()
      console.log('dataaaa', data)
    })
}



const updateDownloadCount = (id) =>
  Replay.findById(id)
    .then(replay => {
      if (!replay.downloads) {
        replay.downloads = 1;
      } else {
        replay.downloads += 1;
      }

      return replay;
    })
    .then(replay => replay.save(replay))
    .catch(err => {
      throw(err);
    })

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
  updateDownloadCount,
  searchReplays,
};
