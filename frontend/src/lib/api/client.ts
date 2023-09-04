import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import Cookies from 'js-cookie';

const options = {
    ignoreHeaders: true,
};

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api',
});

axiosInstance.defaults.headers.common['access-token'] = Cookies.get('_access_token');
axiosInstance.defaults.headers.common['client'] = Cookies.get('_client');
axiosInstance.defaults.headers.common['uid'] = Cookies.get('_uid');

const client = applyCaseMiddleware(axiosInstance, options);

export default client;
