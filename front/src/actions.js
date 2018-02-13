import axios from 'axios';
import { normalize, schema } from 'normalizr';

const replaySchema = new schema.Entity('replays', {}, { idAttribute: '_id' });

const baseUrl = 'https://cehovot3a2.execute-api.us-east-1.amazonaws.com/dev';

export function uploadFile(file) {
  return axios.post(`${baseUrl}/uploadFile`, file)
    .then(response => response.data)
    .catch(handleError);
}

export function createReplay(payload) {
  return axios.post(`${baseUrl}/createReplay`, payload)
    .then(response => response.data)
    .catch(handleError);
}

export function fetchReplays({ page }) {
  return axios.get(`${baseUrl}/fetchReplays?page=${page}`)
    .then(response => normalize(response.data, [replaySchema]))
    .catch(handleError);
}

export function renameFile(payload) {
  return axios.post(`${baseUrl}/renameFile`, payload)
    .then(response => response.data)
    .catch(handleError);
}

export function updateDownloadCount(id) {
  return axios.post(`${baseUrl}/updateDownloadCount`, { id })
    .then(response => response.data)
    .catch(handleError);
}

const tournamentBaseUrl = 'https://ncpvepahkc.execute-api.us-east-1.amazonaws.com/dev';

export function registerForTournament(tournamentId, name) {
  const payload = {
    name,
    tournamentId,
  };

  return axios.post(`${tournamentBaseUrl}/createUser`, payload)
    .then(response => response.data);
}

export function fetchTournamentParticipants(tournamentId) {
  return axios.post(`${tournamentBaseUrl}/fetchTournamentParticipants`, { tournamentId })
    .then(response => response.data);
}

function handleError(err) {
  console.error(err); // eslint-disable-line no-console
}