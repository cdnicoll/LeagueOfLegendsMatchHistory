import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? 'https://cdnicoll-lol-server.herokuapp.com' : 'http://localhost:3001'

export default axios.create({
  baseURL: url,
});
