import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const Axios = axios.create({
  baseURL: publicRuntimeConfig.baseUrl,
});
Axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default Axios;
