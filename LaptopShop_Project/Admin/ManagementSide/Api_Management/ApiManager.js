/* eslint-disable prettier/prettier */
import axios from 'axios';

export const ProjectBaseUrl = 'http://10.0.2.2:5156';
export const AthenUrl = '/authen';

const ApiManager = axios.create({
    baseURL: ProjectBaseUrl,
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;
