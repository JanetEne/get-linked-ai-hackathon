import { AxiosResponse } from 'axios';
import Axios from './axios';

export const getCategories = async () => {
  const response: AxiosResponse = await Axios.get('/hackathon/categories-list');
  return response.data;
};
