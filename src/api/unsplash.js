import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
      Authorization: 'Client-ID e11f7a14e1a56bba8fe32228f6648ce57de9abe2278dbc2e0d62d42c0a75031e'
    }

});
