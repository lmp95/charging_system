import axios from "axios";

const axiosDefault = axios.create({
    baseURL: 'http://localhost:3600/v1',
});

axiosDefault.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosDefault;