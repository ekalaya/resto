import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://resto-e7a1f.firebaseio.com/'
});

export default instance;