const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const { tryParse, handleSuccess, handleError } = require('serverless-helpers/responses');

const replayService = require('./Replay.service');

module.exports.handler = (event, context, callback) => {
  mongoose.connect(process.env.MONGODB_URI);

  replayService.createReplay(shapeReplay(tryParse(event.body)))
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => {
      mongoose.connection.close();
    });
}

function shapeReplay({ bucketKey, description, data }) {
  const dataPayload = {
    map: data.game.map,
    teams: filterValidTeams(data.teams),
    winner: data.game.winner_team,
    length: data.game.length,
    saverName: data.game.saver_name,
    type: data.game.type,
    length: data.header.length,
  };

  return {
    data: dataPayload,
    bucketKey,
    description,
  };
}

function filterValidTeams(teams) {
  return teams.reduce((acc, currVal) => {
    if (!currVal) {
      return acc;
    }

    const isPlayer = Object.keys(currVal).find(key => currVal[key].color !== 'observer');

    if (isPlayer) {
      acc = acc.concat(currVal);
    }

    return acc;
  }, []);
}