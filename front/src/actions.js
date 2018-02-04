import axios from 'axios';

const baseUrl = 'https://cehovot3a2.execute-api.us-east-1.amazonaws.com/dev';

export function uploadFile(file) {
  return axios.post(`${baseUrl}/uploadFile`, file)
    .then(response => response.data)
    .catch(console.error); // eslint-disable-line no-console
}

export function createReplay(payload) {
  return axios.post(`${baseUrl}/createReplay`, payload)
    .then(response => response.data)
    .catch(console.error); // eslint-disable-line no-console
}

export function fetchReplays({ page }) {
  return axios.get(`${baseUrl}/fetchReplays?page=${page}`)
    .then(response => response.data)
    .catch(console.error); // eslint-disable-line no-console
}

export function renameFile(payload) {
  return axios.post(`${baseUrl}/renameFile`, payload)
    .then(response => response.data)
    .catch(console.error); // eslint-disable-line no-console
}