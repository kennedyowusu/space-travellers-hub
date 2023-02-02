import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
});

export default axiosInstance;
