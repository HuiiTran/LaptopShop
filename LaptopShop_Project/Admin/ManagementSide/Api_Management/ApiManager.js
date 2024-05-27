/* eslint-disable prettier/prettier */
import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'https://localhost:7169',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;
