/* eslint-disable linebreak-style */
const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gabflix-server.herokuapp.com';

export default {
  URL_BACKEND,
};
