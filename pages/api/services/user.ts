import { AxiosResponse } from 'axios';
import Axios from './axios';
import { IContact, IRegister } from 'interfaces/user';

export const register = async (payload: IRegister) => {
  const response: AxiosResponse = await Axios.post(
    '/hackathon/registration',
    payload
  );
  return response;
};

export const contact = async (payload: IContact) => {
  const response: AxiosResponse = await Axios.post(
    '/hackathon/contact-form',
    payload
  );
  return response;
};
