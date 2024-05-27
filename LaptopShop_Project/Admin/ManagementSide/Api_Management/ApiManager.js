/* eslint-disable prettier/prettier */
import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'http://10.0.2.2:5156',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;
