import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.spacexdata.com/v3/' });

export const getRockets = () => API.get('/rockets');
export const getMissions = () => API.get('/missions');

