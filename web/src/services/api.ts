import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
});

export const auth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(('@Aircnc:token'))}`
  }
});