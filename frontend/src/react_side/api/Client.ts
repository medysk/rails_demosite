import axios from 'axios';

const element: HTMLMetaElement = document.getElementsByName(
  'csrf-token',
)[0] as HTMLMetaElement;

axios.defaults.headers.common['X-CSRF-Token'] = element.content;

const client = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
});

export default client;
