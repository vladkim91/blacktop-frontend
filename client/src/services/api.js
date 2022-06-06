import axios from 'axios';

export const API_URL = 'https://arcane-shore-16705.herokuapp.com';

const Client = axios.create({ baseURL: API_URL });

export default Client;
